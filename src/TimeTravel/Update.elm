module TimeTravel.Update exposing (update) -- where

import TimeTravel.Model exposing (..)

update : Msg -> Model model msg -> Model model msg
update message model =
  case message of
    ToggleSync ->
      { model | sync = not model.sync }

    ToggleExpand ->
      { model | expand = not model.expand }

    ToggleFilter name ->
      { model |
        filter =
          List.map
            (\(name', visible) ->
              if name == name' then
                (name, not visible)
              else (name, visible)
            )
          model.filter
      }
