module TimeTravel.Internal.View exposing (view) -- where

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.MsgLike as MsgLike exposing (MsgLike(..))
import TimeTravel.Internal.Util.Nel as Nel exposing (..)
import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Icons as I
import TimeTravel.Internal.MsgTreeView as MsgTreeView
import TimeTravel.Internal.DiffView as DiffView
import TimeTravel.Internal.Parser.Formatter as Formatter

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.App as App

import String


view : (msg -> a) -> (Msg -> a) -> (model -> Html msg) -> Model model msg data -> Html a
view transformUserMsg transformDebuggerMsg userViewFunc model =
  div
    []
    [ App.map transformUserMsg (userView userViewFunc model)
    , App.map transformDebuggerMsg (debugView model)
    ]


userView : (model -> Html msg) -> Model model msg data -> Html msg
userView userView model =
  case selectedItem model of
    Just item ->
      userView item.model
    Nothing ->
      text "Error: Unable to render"


debugView : Model model msg data -> Html Msg
debugView model =
  div
    []
    [ resyncView model.sync
    , div
        [ style (S.debugView model.fixedToLeft) ]
        [ headerView model.fixedToLeft model.sync model.expand model.filter
        , modelView model
        , msgListView
            model.filter
            model.selectedMsg
            (Nel.toList model.history)
            (detailView model)
        ]
    ]


resyncView : Bool -> Html Msg
resyncView sync =
  if sync then
    text ""
  else
    div [ style (S.resyncView sync), onMouseDown Resync ] []


headerView : Bool -> Bool -> Bool -> FilterOptions -> Html Msg
headerView fixedToLeft sync expand filterOptions =
  div []
  [ div [ style S.headerView ]
    [ buttonView ToggleLayout True [ I.layout ]
    , buttonView ToggleSync False [ I.sync sync ]
    , buttonView ToggleExpand False [ I.filterExpand expand ]
    ]
  , filterView expand filterOptions
  ]


buttonView : msg -> Bool -> List (Html msg) -> Html msg
buttonView onClickMsg left inner =
  div [ style (S.buttonView left), onClick onClickMsg ] inner


filterView : Bool -> FilterOptions -> Html Msg
filterView visible filterOptions =
  div
    [ style (S.filterView visible) ]
    (List.map filterItemView filterOptions)


filterItemView : (String, Bool) -> Html Msg
filterItemView (name, visible) =
  div []
    [ label
        []
        [ input
            [ type' "checkbox"
            , checked visible
            , onClick (ToggleFilter name)
            ]
            []
        , text name
        ]
    ]


modelView : Model model msg data -> Html Msg
modelView model =
  case selectedItem model of
    Just { model, lazyModelAst } ->
      div
        []
        [ div [ style S.modelView ] [ text (toString model) ]
        ]

    Nothing ->
      text ""


msgListView : FilterOptions -> Maybe Id -> List (HistoryItem model msg data) -> Html Msg -> Html Msg
msgListView filterOptions selectedMsg items detailView =
  div []
  [ detailView
  , div
      [ style S.msgListView ]
      ( List.filterMap (msgView filterOptions selectedMsg) items )
  ]

detailView : Model model msg data -> Html Msg
detailView model =
  if not model.sync then
    let
      msgTreeView =
        case (model.selectedMsg, selectedMsgTree model) of
          (Just id, Just tree) ->
            MsgTreeView.view SelectMsg id tree
          _ ->
            text ""

      diffView =
        case selectedAndOldAst model of
          Just (oldAst, newAst) ->
            DiffView.view oldAst newAst
          Nothing ->
            text ""

      detailedMsgView =
        case selectedMsgAst model of
          Just ast ->
            div
              [ style S.detailedMsgView ]
              [ text (Formatter.formatAsString ast) ]

          Nothing ->
            text ""

    in
      div
        [ style (S.detailView model.fixedToLeft True) ]
        [ msgTreeView
        , detailedMsgView
        , diffView
        ]
  else
    text ""


msgView : FilterOptions -> Maybe Id -> (HistoryItem model msg data) -> Maybe (Html Msg)
msgView filterOptions selectedMsg { id, msg, causedBy } =
  let
    selected =
      case selectedMsg of
        Just msgId -> msgId == id
        Nothing -> False

    str =
      MsgLike.format msg

    visible =
      msg == Init ||
        case String.words str of
          tag :: _ ->
            List.any (\(name, visible) -> tag == name && visible) filterOptions
          _ ->
            False
  in
    if visible then
      Just (
        div
          [ style (S.msgView selected)
          , onClick (SelectMsg id)
          ]
          [ text (toString id ++ ": " ++ str) ]
      )
    else
      Nothing
