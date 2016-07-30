module TimeTravel.Internal.Model exposing (..)

import String
import Set exposing (Set)

import TimeTravel.Internal.Util.Nel as Nel exposing (..)
import TimeTravel.Internal.Parser.AST as AST exposing (ASTX)
import TimeTravel.Internal.Parser.Parser as Parser
import TimeTravel.Internal.Parser.Formatter as Formatter
import TimeTravel.Internal.Util.RTree as RTree exposing (RTree)
import TimeTravel.Internal.MsgLike exposing (MsgLike(..))

import Basics.Extra exposing (never)

import Json.Decode as Decode exposing ((:=), Decoder)
import Json.Encode as Encode

import Diff exposing (Change, diffLines)

type alias HistoryItem model msg data =
  { id : Id
  , msg : MsgLike msg data
  , causedBy : Maybe Id
  , model : model
  , lazyMsgAst : Maybe (Result String ASTX)
  , lazyModelAst : Maybe (Result String ASTX)
  , lazyDiff : Maybe (List (Change String))
  }


type alias Model model msg data =
  { future : List (HistoryItem model msg data)
  , history : Nel (HistoryItem model msg data)
  , filter : FilterOptions
  , sync : Bool
  , showModelDetail : Bool
  , expand : Bool
  , msgId : Id
  , selectedMsg : Maybe Id
  , showDiff : Bool
  , fixedToLeft : Bool
  , expandedTree : Set AST.ASTId
  , minimized : Bool
  , modelFilter : String
  , watch : Maybe AST.ASTId
  }

type alias Id = Int

type alias FilterOptions =
  List (String, Bool)

type alias Settings =
  { fixedToLeft : Bool
  , filter : FilterOptions
  }

type alias OutgoingMsg =
  { type_ : String
  , settings : String
  }

type alias IncomingMsg =
  { type_ : String
  , settings : String
  }

type Msg
  = ToggleSync
  | ToggleExpand
  | ToggleFilter String
  | SelectMsg Id
  | Resync
  | ToggleLayout
  | Receive IncomingMsg
  | ToggleModelDetail Bool
  | ToggleModelTree AST.ASTId
  | ToggleMinimize
  | InputModelFilter String
  | SelectModelFilter AST.ASTId
  | SelectModelFilterWatch AST.ASTId
  | StopWatching


init : model -> Model model msg data
init model =
  { future = []
  , history = Nel (initItem model) []
  , filter = []
  , sync = True
  , showModelDetail = True
  , expand = False
  , msgId = 1
  , selectedMsg = Nothing
  , showDiff = False
  , fixedToLeft = False
  , expandedTree = Set.empty
  , minimized = False
  , modelFilter = ""
  , watch = Nothing
  }


initItem : model -> HistoryItem model msg data
initItem model = newItem 0 Init Nothing model


newItem : Id -> MsgLike msg data -> Maybe Id -> model -> HistoryItem model msg data
newItem id msg causedBy model =
  { id = id
  , msg = msg
  , causedBy = causedBy
  , model = model
  , lazyMsgAst = Nothing
  , lazyModelAst = Nothing
  , lazyDiff = Nothing
  }


selectedItem : Model model msg data -> Maybe (HistoryItem model msg data)
selectedItem model =
  case (model.sync, model.selectedMsg) of
    (True, _) ->
      Just <| Nel.head model.history
    (False, Nothing) ->
      Just <| Nel.head model.history
    (False, Just msgId) ->
      (Nel.find (\item -> item.id == msgId) model.history)


updateOnIncomingUserMsg :
     ((Id, msg) -> parentMsg)
  -> (msg -> model -> (model, Cmd msg))
  -> (Maybe Id, msg)
  -> Model model msg data
  -> (Model model msg data, Cmd parentMsg)
updateOnIncomingUserMsg transformMsg update (causedBy, msg) model =
  let
    (Nel last past) = model.history
    (newRawUserModel, userCmd) = update msg last.model
    megLike = Message msg
    nextItem = newItem model.msgId megLike causedBy newRawUserModel
  in
    ( { model |
        filter = updateFilter megLike model.filter
      , msgId = model.msgId + 1
      , future =
          if not model.sync then
            nextItem :: model.future
          else
            model.future
      , history =
          if model.sync then
            Nel.cons nextItem model.history
          else
            model.history
      } |> selectFirstIfSync |> updateLazyAstForWatch
    )
    ! [ Cmd.map transformMsg (Cmd.map ((,) model.msgId) userCmd)
      ]


urlUpdateOnIncomingData :
     ((Id, msg) -> parentMsg)
  -> (data -> model -> (model, Cmd msg))
  -> data
  -> Model model msg data
  -> (Model model msg data, Cmd parentMsg)
urlUpdateOnIncomingData transformMsg urlUpdate data model =
  let
    (Nel last past) = model.history
    (newRawUserModel, userCmd) = urlUpdate data last.model
    msgLike = UrlData data
    nextItem = newItem model.msgId msgLike Nothing newRawUserModel
  in
    ( { model |
          filter = updateFilter msgLike model.filter
        , msgId = model.msgId + 1
        , future =
            if not model.sync then
              nextItem :: model.future
            else
              model.future
        , history =
            if model.sync then
              Nel.cons nextItem model.history
            else
              model.history
      } |> selectFirstIfSync
    ) ! [ Cmd.map transformMsg (Cmd.map ((,) model.msgId) userCmd) ]



updateFilter : MsgLike msg data -> FilterOptions -> FilterOptions
updateFilter msgLike filterOptions =
  let
    str =
      case msgLike of
        Message msg -> toString msg
        UrlData data -> "[Nav] "-- ++ toString data
        Init -> "" -- doesn't count as a filter
  in
    case String.words str of
      head :: _ ->
        let
          exists =
            List.any (\(name, _) -> name == head) filterOptions
        in
          if exists then
            filterOptions
          else
            (head, True) :: filterOptions
      _ ->
        filterOptions


futureToHistory : Model model msg data -> Model model msg data
futureToHistory model =
  { model |
    future = []
  , history = Nel.concat model.future model.history
  }


-- TODO better not use for performance
mapHistory :
     (HistoryItem model msg data -> HistoryItem model msg data)
  -> Model model msg data
  -> Model model msg data
mapHistory f model =
  { model |
    history = Nel.map f model.history
  }


updateLazyAst : Model model msg data -> Model model msg data
updateLazyAst model =
  case model.selectedMsg of
    Just id ->
      mapHistory
        (\item ->
          if item.id == id || item.id == id - 1 then
            (updateLazyMsgAst << updateLazyModelAst) item
          else
            item
        )
        model
    _ ->
      model


updateLazyAstForWatch : Model model msg data -> Model model msg data
updateLazyAstForWatch model =
  case (model.watch, (Nel.head model.history).id) of
    (Just _, id) ->
      mapHistory
        (\item ->
          if item.id == id then
            updateLazyModelAst item
          else
            item
        )
        model
    _ ->
      model


updateLazyMsgAst : HistoryItem model msg data -> HistoryItem model msg data
updateLazyMsgAst item =
  { item |
    lazyMsgAst =
      if item.lazyMsgAst == Nothing then
        case item.msg of
          Message msg ->
            Just (Result.map (AST.attachId "@") <| Parser.parse (toString msg))
          UrlData data ->
            Just (Result.map (AST.attachId "@") <| Parser.parse (toString data))
          _ ->
            Just (Err "")
      else
        item.lazyMsgAst
  }


updateLazyModelAst : HistoryItem model msg data -> HistoryItem model msg data
updateLazyModelAst item =
  { item |
    lazyModelAst =
      if item.lazyModelAst == Nothing then
        Just (Result.map (AST.attachId "@") <| Parser.parse (toString item.model))
      else
        item.lazyModelAst
  }


updateLazyDiff : Model model msg data -> Model model msg data
updateLazyDiff model =
  if model.showModelDetail then
    model
  else
    case model.selectedMsg of
      Just id ->
        mapHistory
          (\item ->
            if item.id == id then
              updateLazyDiffHelp model item
            else
              item
          )
          model
      _ ->
        model


updateLazyDiffHelp : Model model msg data -> HistoryItem model msg data -> HistoryItem model msg data
updateLazyDiffHelp model item =
  let
    newDiff =
      case item.lazyDiff of
        Just changes ->
          Just changes
        Nothing ->
          case selectedAndOldAst model of
            Just (oldAst, newAst) ->
              Just (makeChanges oldAst newAst)
            Nothing ->
              Nothing
  in
    { item | lazyDiff = newDiff }


makeChanges : ASTX -> ASTX -> List (Change String)
makeChanges oldAst newAst =
  if oldAst == newAst then -- strangily, its faster if they are equal
    []
  else
    diffLines
      (Formatter.formatAsString (Formatter.makeModel oldAst))
      (Formatter.formatAsString (Formatter.makeModel newAst))


selectedMsgAst : Model model msg data -> Maybe ASTX
selectedMsgAst model =
  case model.selectedMsg of
    Just id ->
      case Nel.findMap (\item -> if item.id == id then Just item.lazyMsgAst else Nothing ) model.history of
        Just (Just (Ok ast)) ->
          Just ast
        _ ->
          Nothing
    _ ->
      Nothing


selectedAndOldAst : Model model msg data -> Maybe (ASTX, ASTX)
selectedAndOldAst model =
  case model.selectedMsg of
    Just id ->
      let
        newAndOld =
          Nel.findMapMany 2
            (\item ->
              if item.id == id || item.id == id - 1 then
                Just item.lazyModelAst
              else
                Nothing
            )
            model.history
      in
        case newAndOld of
          Just (Ok newAst) :: Just (Ok oldAst) :: _ ->
            Just (oldAst, newAst)

          -- first
          Just (Ok ast) :: [] ->
            Just (ast, ast)

          _ ->
            Nothing
    _ ->
      Nothing


selectFirstIfSync : Model model msg data -> Model model msg data
selectFirstIfSync model =
  if model.sync then
    { model |
      selectedMsg = Just (Nel.head model.history).id
    }
  else
    model


selectedMsgTree : Model model msg data -> Maybe (RTree (HistoryItem model msg data))
selectedMsgTree model =
  case model.selectedMsg of
    Just id ->
      case msgRootOf id model.history of
        Just root ->
          let
            f item tree =
              RTree.addChildAt (\i -> item.causedBy == Just i.id) item tree
          in
            Just <|
              RTree.sortEachBranchBy (\item -> item.id) <|
                List.foldr f (RTree.singleton root) (Nel.toList model.history)

        Nothing ->
          Nothing

    _ ->
      Nothing


msgRootOf : Id -> Nel (HistoryItem model msg data) -> Maybe (HistoryItem model msg data)
msgRootOf id history =
  case Nel.find (\item -> item.id == id) history of
    Just item ->
      case item.causedBy of
        Just id -> msgRootOf id history
        Nothing -> Just item
    Nothing ->
      Nothing


settingsDecoder : Decoder Settings
settingsDecoder =
  Decode.object2
    Settings
    ("fixedToLeft" := Decode.bool)
    ("filter" := Decode.list (Decode.tuple2 (,) Decode.string Decode.bool))


encodeSetting : Settings -> String
encodeSetting settings =
  Encode.encode 0 <|
    Encode.object
      [ ("fixedToLeft", Encode.bool settings.fixedToLeft)
      , ("filter"
        , Encode.list <|
            List.map
              (\(key, value) -> Encode.list [ Encode.string key, Encode.bool value] )
              settings.filter
        )
      ]


saveSetting : (OutgoingMsg -> Cmd Never) -> Model model msg data -> Cmd Msg
saveSetting save model =
  Cmd.map never (save <| { type_ = "save", settings = encodeSetting { fixedToLeft = model.fixedToLeft, filter = model.filter } } )


decodeSettings : String -> Result String Settings
decodeSettings =
  Decode.decodeString settingsDecoder

--
