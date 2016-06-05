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
      [ style S.debugView ]
      [ headerView model.sync model.expand model.filter
      , modelView current
      , msgListView model.filter (List.filterMap fst (current :: past))
      ]


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


modelView : (a, model) -> Html msg
modelView (_, model) =
  div [ style S.modelView ] [ text (toString model) ]


msgListView : FilterOptions -> List m -> Html msg
msgListView filterOptions msgList =
  div [ style S.msgListView ] (List.filterMap (msgView filterOptions) msgList)


msgView : FilterOptions -> m -> Maybe (Html msg)
msgView filterOptions msg =
  let
    str = toString msg
    visible =
      case String.words str of
        tag :: _ ->
          List.any (\(name, visible) -> tag == name && visible) filterOptions
        _ ->
          False
  in
    if visible then
      Just (div [] [ text (toString msg) ])
    else
      Nothing
