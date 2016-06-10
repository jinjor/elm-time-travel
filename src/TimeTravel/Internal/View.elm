module TimeTravel.Internal.View exposing (view) -- where

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.Util exposing (..)
import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Icons as I
import TimeTravel.Internal.DiffView as DiffView
import TimeTravel.Internal.Parser.Formatter as Formatter
import TimeTravel.Internal.Parser.AST exposing (AST)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.App as App

import String


view : (msg -> a) -> (Msg -> a) -> (model -> Html msg) -> Model model msg -> Html a
view transformUserMsg transformDebuggerMsg userViewFunc model =
  div
    []
    [ App.map transformUserMsg (userView userViewFunc model)
    , App.map transformDebuggerMsg (debugView model)
    ]


userView : (model -> Html msg) -> Model model msg -> Html msg
userView userView model =
  case selectedModel model of
    Just (userModel, _) ->
      userView userModel
    Nothing ->
      text "Error: Unable to render"


debugView : Model model msg -> Html Msg
debugView model =
  let
    diffView' =
      if not model.sync then
        case selectedAndOldAst model of
          Just (oldAst, newAst) ->
            diffView oldAst newAst
          Nothing ->
            text ""
      else
        text ""
  in
    div
      []
      [ resyncView model.sync
      , div
          [ style S.debugView ]
          [ headerView model.sync model.expand model.filter
          , modelView model
          , msgListView
              model.filter
              model.selectedMsg
              (List.filterMap fst (nelToList model.history))
              diffView'
          ]
      ]


resyncView : Bool -> Html Msg
resyncView sync =
  if sync then
    text ""
  else
    div [ style (S.resyncView sync), onMouseDown Resync ] []


headerView : Bool -> Bool -> FilterOptions -> Html Msg
headerView sync expand filterOptions =
  div []
  [ div [ style S.headerView ]
    [ buttonView ToggleSync [ I.sync sync ]
    , buttonView ToggleExpand [ I.filterExpand expand ]
    ]
  , filterView expand filterOptions
  ]


buttonView : msg -> List (Html msg) -> Html msg
buttonView onClickMsg inner =
  div [ style S.buttonView, onClick onClickMsg ] inner


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


modelView : Model model m -> Html Msg
modelView model =
  case selectedModel model of
    Just (model, lazyAst) ->
      div
        []
        [ div [ style S.modelView ] [ text (toString model) ]
        ]

    Nothing ->
      text ""


diffView : AST -> AST -> Html msg
diffView oldAst newAst =
  DiffView.view (Formatter.formatAsString oldAst) (Formatter.formatAsString newAst)


msgListView : FilterOptions -> Maybe Id -> List (Id, m) -> Html Msg -> Html Msg
msgListView filterOptions selectedMsg msgList diffView =
  div []
  [ diffView
  , div
      [ style S.msgListView ]
      ( List.filterMap (msgView filterOptions selectedMsg) msgList )
  ]



msgView : FilterOptions -> Maybe Id -> (Id, m) -> Maybe (Html Msg)
msgView filterOptions selectedMsg (id, msg) =
  let
    selected =
      case selectedMsg of
        Just msgId -> msgId == id
        Nothing -> False
    str =
      toString msg
    visible =
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
          [ text (toString msg) ]
      )
    else
      Nothing
