module TimeTravel.Update exposing (update) -- where

import TimeTravel.Model exposing (..)

update : Msg -> Model model msg -> Model model msg
update message model =
  case message of
    ToggleSync ->
      { model |
        selectedMsg =
          if not model.sync then
            Nothing
          else
            model.selectedMsg
      , sync = not model.sync
      }

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
      }
