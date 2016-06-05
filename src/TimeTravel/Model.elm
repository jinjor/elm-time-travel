module TimeTravel.Model exposing (..) -- where

import TimeTravel.Util exposing (..)

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
