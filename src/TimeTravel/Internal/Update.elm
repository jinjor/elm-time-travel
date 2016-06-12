module TimeTravel.Internal.Update exposing (update) -- where

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.Util.Nel as Nel exposing (..)

update : Msg -> Model model msg data -> Model model msg data
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
        }
        |> selectFirstIfSync
        |> if nextSync then futureToHistory else identity

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
      } |> selectFirstIfSync |> futureToHistory

    -- ToggleDiff ->
    --   { model |
    --     showDiff = not (model.showDiff)
    --   } |> updateLazyAst

    ToggleLayout ->
      { model |
        fixedToLeft = not (model.fixedToLeft)
      }
