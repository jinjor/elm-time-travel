module TimeTravel.Internal.Update exposing (update, updateAfterUserMsg) -- where

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.Util.Nel as Nel exposing (..)
import Set exposing (Set)

update : (OutgoingMsg -> Cmd Never) -> Msg -> Model model msg data -> (Model model msg data, Cmd Msg)
update save message model =
  case message of
    Receive incomingMsg ->
      if incomingMsg.type_ == "load" then
        case decodeSettings incomingMsg.settings of
          Ok { fixedToLeft, filter } ->
            { model | fixedToLeft = fixedToLeft, filter = filter } ! []
          Err _ ->
            model ! [] |> Debug.log "err decoing"
      else
        model ! []

    ToggleSync ->
      let
        nextSync = not model.sync
        newModel =
          { model |
            selectedMsg =
              if nextSync then
                Nothing
              else
                model.selectedMsg
          , sync = nextSync
          , showModelDetail = False
          }
          |> selectFirstIfSync
          |> if nextSync then futureToHistory else identity
      in
        newModel ! []

    ToggleExpand ->
      let
        newModel =
          { model | expand = not model.expand }
      in
        newModel ! []

    ToggleFilter name ->
      let
        newModel =
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
      in
        newModel ! [ saveSetting save newModel ]

    SelectMsg id ->
      let
        newModel =
          { model |
            selectedMsg = Just id
          , sync = False
          } |> updateLazyAst
      in
        newModel ! []

    Resync ->
      let
        newModel =
          { model |
            sync = True
          , showModelDetail = False
          } |> selectFirstIfSync |> futureToHistory
      in
        newModel ! []

    -- ToggleDiff ->
    --   { model |
    --     showDiff = not (model.showDiff)
    --   } |> updateLazyAst

    ToggleLayout ->
      let
        newModel =
          { model |
            fixedToLeft = not (model.fixedToLeft)
          }
      in
        newModel ! [ saveSetting save newModel ]

    ToggleModelDetail ->
      if model.sync then
        ( { model |
            showModelDetail = not (model.showModelDetail)
          , sync = False
          }
          |> selectFirstIfSync
          |> futureToHistory
        ) ! []
      else
        { model |
          showModelDetail = not (model.showModelDetail)
        } ! []

    ToggleModelTree id ->
      { model | foldedTree = toggleSet id model.foldedTree } ! []


toggleSet : comparable -> Set comparable -> Set comparable
toggleSet a set =
  (if Set.member a set then Set.remove else Set.insert) a set


updateAfterUserMsg : (OutgoingMsg -> Cmd Never) -> Model model msg data -> (Model model msg data, Cmd Msg)
updateAfterUserMsg save model =
  model ! [ saveSetting save model ]
