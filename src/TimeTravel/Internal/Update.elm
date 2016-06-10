module TimeTravel.Internal.Update exposing (update) -- where

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.Util exposing (..)

update : Msg -> Model model msg -> Model model msg
update message model =
  case Debug.log "message" message of
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
      } |> updateLazyAst

    Resync ->
      { model |
        sync = True
      , selectedMsg = Nothing
      } |> futureToHistory

    ToggleDiff ->
      { model |
        showDiff = not (model.showDiff)
      } |> updateLazyAst
