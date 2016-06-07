module TimeTravel.Internal.Model exposing (..) -- where

import String

import TimeTravel.Internal.Util exposing (..)

type alias Model model msg =
  { future : List ((Id, msg), model)
  , history : Nel (Maybe (Id, msg), model)
  , filter : FilterOptions
  , sync : Bool
  , expand : Bool
  , msgId : Id
  , selectedMsg : Maybe Id
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


init : model -> Model model msg
init model =
  { future = []
  , history = Nel (Nothing, model) []
  , filter = []
  , sync = True
  , expand = False
  , msgId = 0
  , selectedMsg = Nothing
  }


selectedModel : Model model msg -> Maybe model
selectedModel model =
  let
    (Nel current past) = model.history
  in
    case (model.sync, model.selectedMsg) of
      (True, _) ->
        Just (snd current)
      (False, Nothing) ->
        Just (snd current)
      (False, Just msgId) ->
        Maybe.map snd (selectedModelHelp msgId (current :: past))


selectedModelHelp : Id -> List (Maybe (Id, msg), model) -> Maybe (Maybe (Id, msg), model)
selectedModelHelp selectedMsgId list =
  let
    f (idMsg, _) =
      case idMsg of
        Just (id, _) -> id == selectedMsgId
        _ -> False
  in
    case List.filter f list of
      a :: _ -> Just a
      _ -> Nothing


updateOnIncomingUserMsg :
     (msg -> parentMsg)
  -> (msg -> model -> (model, Cmd msg))
  -> msg
  -> Model model msg
  -> (Model model msg, Cmd parentMsg)
updateOnIncomingUserMsg transformMsg update msg model =
  let
    (Nel current past) = model.history
    (_, m) = current
    (newUserModel, userCmd) = update msg m
  in
    { model |
      filter = updateFilter msg model.filter
    , msgId = model.msgId + 1
    , future =
        if not model.sync then
          ((model.msgId, msg), newUserModel) :: model.future
        else
          model.future
    , history =
        if model.sync then
          Nel (Just (model.msgId, msg), newUserModel) (current :: past)
        else
          model.history
    } ! [ Cmd.map transformMsg userCmd ]


urlUpdateOnIncomingData :
     (msg -> parentMsg)
  -> (data -> model -> (model, Cmd msg))
  -> data
  -> Model model msg
  -> (Model model msg, Cmd parentMsg)
urlUpdateOnIncomingData transformMsg urlUpdate data model =
  let
    (Nel current past) = model.history
    (_, m) = current
    (newUserModel, userCmd) = urlUpdate data m
  in
    { model |
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
          Nel (Nothing {- FIXME -}, newUserModel) (current :: past)
        else
          model.history
    } ! [ Cmd.map transformMsg userCmd ]



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
