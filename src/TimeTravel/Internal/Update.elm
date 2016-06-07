module TimeTravel.Internal.Update exposing (update) -- where

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.Util exposing (..)

update : Msg -> Model model msg -> Model model msg
update message model =
  case message of
    ToggleSync ->
      let
        nextSync = not model.sync
      in
        { model |
          selectedMsg =
            if nextSync then
              Nothing
            else
              model.selectedMsg
        , sync = nextSync
        } |> if nextSync then futureToHistory else identity

    ToggleExpand ->
      { model | expand = not model.expand }

    ToggleFilter name ->
      { model |
        filter =
          List.map
            (\(name', visible) ->
              if name == name' then
                (name', not visible)
              else (name', visible)
            )
          model.filter
      }

    SelectMsg id ->
      { model |
        selectedMsg = Just id
      , sync = False
      }

    Resync ->
      { model |
        sync = True
      , selectedMsg = Nothing
      } |> futureToHistory

futureToHistory : Model model msg -> Model model msg
futureToHistory model =
  { model |
    future = []
  , history =
      let
        (Nel current past) = model.history
      in
        case List.map (\(msg, model) -> (Just msg, model)) model.future of
          head :: tail ->
            Nel head (tail ++ (current :: past))
          _ ->
            Nel current past
  }
