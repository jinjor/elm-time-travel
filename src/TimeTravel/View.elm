module TimeTravel.View exposing (view) -- where

import TimeTravel.Model exposing (..)
import TimeTravel.Util exposing (..)
import TimeTravel.Styles as S
import TimeTravel.Icons as I

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.App as App

import String

view : Model model msg -> Html Msg
view model =
  let
    (Nel current past) = model.history
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
              (List.filterMap fst (current :: past))
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


modelView : Model model m -> Html msg
modelView model =
  case selectedModel model of
    Just model ->
      div [ style S.modelView ] [ text (toString model) ]
    Nothing ->
      text ""


msgListView : FilterOptions -> Maybe Id -> List (Id, m) -> Html Msg
msgListView filterOptions selectedMsg msgList =
  div [ style S.msgListView ] (List.filterMap (msgView filterOptions selectedMsg) msgList)


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
