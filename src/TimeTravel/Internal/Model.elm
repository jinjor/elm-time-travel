module TimeTravel.Internal.Model exposing (..) -- where

import String

import TimeTravel.Internal.Util.Nel as Nel exposing (..)
import TimeTravel.Internal.Parser.AST exposing (AST)
import TimeTravel.Internal.Parser.Parser as Parser


type alias UserMsg msg =
  (Id, msg, Maybe Id)

type alias UserModel model =
  (model, Maybe (Result String AST))

type alias HistoryItem model msg =
  (Maybe (UserMsg msg), UserModel model)


type alias Model model msg =
  { future : List (UserMsg msg, UserModel model)
  , history : Nel (HistoryItem model msg)
  , filter : FilterOptions
  , sync : Bool
  , expand : Bool
  , msgId : Id
  , selectedMsg : Maybe Id
  , showDiff : Bool
  , fixedToLeft : Bool
  }

type alias Id = Int

type alias FilterOptions =
  List (String, Bool)


type Msg
  = ToggleSync
  | ToggleExpand
  | ToggleFilter String
  | SelectMsg Id
  | Resync
  -- | ToggleDif
  | ToggleLayout


init : model -> Model model msg
init model =
  { future = []
  , history = Nel (Nothing, (model, Nothing)) []
  , filter = []
  , sync = True
  , expand = False
  , msgId = 0
  , selectedMsg = Nothing
  , showDiff = False
  , fixedToLeft = False
  }


selectedModel : Model model msg -> Maybe (UserModel model)
selectedModel model =
  Maybe.map snd (selectedItem model)


selectedItem : Model model msg -> Maybe (HistoryItem model msg)
selectedItem model =
  let
    (Nel current past) = model.history
  in
    case (model.sync, model.selectedMsg) of
      (True, _) ->
        Just current
      (False, Nothing) ->
        Just current
      (False, Just msgId) ->
        selectedModelHelp msgId (current :: past)



selectedModelHelp : Id -> List (HistoryItem model msg) -> Maybe (HistoryItem model msg)
selectedModelHelp selectedMsgId list =
  let
    f (idMsg, _) =
      case idMsg of
        Just (id, _, _) -> id == selectedMsgId
        _ -> False
  in
    case List.filter f list of
      a :: _ -> Just a
      _ -> Nothing


updateOnIncomingUserMsg :
     ((Id, msg) -> parentMsg)
  -> (msg -> model -> (model, Cmd msg))
  -> (Maybe Id, msg)
  -> Model model msg
  -> (Model model msg, Cmd parentMsg)
updateOnIncomingUserMsg transformMsg update (causedBy, msg) model =
  let
    (Nel (_, (oldModel, _)) past) = model.history
    (newRawUserModel, userCmd) = update msg oldModel
    -- _ = Debug.log "(causedBy, msg)" (causedBy, msg)
    newUserModel = (newRawUserModel, Nothing)
  in
    ( { model |
        filter = updateFilter msg model.filter
      , msgId = model.msgId + 1
      , future =
          if not model.sync then
            ((model.msgId, msg, causedBy), newUserModel) :: model.future
          else
            model.future
      , history =
          if model.sync then
            Nel.cons (Just (model.msgId, msg, causedBy), newUserModel) model.history
          else
            model.history
      } |> selectFirstIfSync
    )
    ! [ Cmd.map transformMsg (Cmd.map ((,) model.msgId) userCmd) ]


urlUpdateOnIncomingData :
     ((Id, msg) -> parentMsg)
  -> (data -> model -> (model, Cmd msg))
  -> data
  -> Model model msg
  -> (Model model msg, Cmd parentMsg)
urlUpdateOnIncomingData transformMsg urlUpdate data model =
  let
    (Nel (_, (oldModel, _)) past) = model.history
    (newRawUserModel, userCmd) = urlUpdate data oldModel
    newUserModel = (newRawUserModel, Nothing)
  in
    ( { model |
      -- FIXME treat data as msg?
      -- filter = updateFilter msg model.filter
      -- FIXME treat data as msg?
      -- , msgId = model.msgId + 1
      -- FIXME treat data as msg?
      -- , future =
      --     if not model.sync then
      --       ((model.msgId, msg), newUserModel) :: model.future
      --     else
      --       model.future
        history =
          if model.sync then
            Nel.cons (Nothing {- FIXME -}, newUserModel) model.history
          else
            model.history
      } |> selectFirstIfSync
    ) ! [ Cmd.map transformMsg (Cmd.map ((,) model.msgId) userCmd) ]



updateFilter : msg -> FilterOptions -> FilterOptions
updateFilter msg filterOptions =
  let
    str = toString msg
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


futureToHistory : Model model msg -> Model model msg
futureToHistory model =
  { model |
    future = []
  , history =
      Nel.concat
        (List.map (\(msg, model) -> (Just msg, model)) model.future)
        model.history
  }

replaceHistory :
     (HistoryItem model msg -> Bool)
  -> (UserModel model -> UserModel model)
  -> Model model msg
  -> Model model msg
replaceHistory match update model =
  { model |
    history =
      Nel.map (\item ->
          let
            (m, userModel) = item
            f = if match item then update else identity
          in
            (m, f userModel)
        ) model.history
  }



matchSelectedOrPrev : Maybe Id -> (HistoryItem model msg -> Bool)
matchSelectedOrPrev selectedMsg =
  case selectedMsg of
    Just id -> (\item ->
      case item of
        (Just (id', _, _), _) ->
          id == id' || id - 1 == id'
        _ ->
          False
      )
    _ ->
      always False


updateLazyAst : Model model msg -> Model model msg
updateLazyAst model =
  replaceHistory
    (matchSelectedOrPrev model.selectedMsg)
    (\e ->
      case e of
        (rawUserModel, Nothing) ->
          (rawUserModel, Just (Parser.parse (toString rawUserModel)))
        _ ->
          e
    )
    model


selectedAndOldAst : Model model msg -> Maybe (AST, AST)
selectedAndOldAst model =
  case Nel.filter (matchSelectedOrPrev model.selectedMsg) model.history of
    (_, (_, Just (Ok newAst))) :: (_, (_, Just (Ok oldAst))) :: _ ->
      Just (oldAst, newAst)
    _ ->
      Nothing


selectFirstIfSync : Model model msg -> Model model msg
selectFirstIfSync model =
  if model.sync then
    { model |
      selectedMsg =
        case Nel.head model.history of
          (Just (id, _, _), _) ->
            Just id
          _ ->
            Nothing
    }
  else
    model




--
