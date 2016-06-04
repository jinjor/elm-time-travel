module TimeTravel.View exposing (view) -- where

import TimeTravel.Model exposing (..)
import TimeTravel.Util exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.App as App

view : Model model msg -> Html Msg
view model =
  debugView model

debugView : Model model msg -> Html Msg
debugView model =
  let
    (Nel current past) = model.history
  in
    div
      [ style debugViewStyle ]
      [ headerView model.sync model.expand model.filter
      , modelView current
      , msgListView (List.filterMap fst (current :: past))
      ]


headerView : Bool -> Bool -> FilterOptions -> Html Msg
headerView sync expand filterOptions =
  div []
  [ div [ style headerViewStyle ]
    [ div [ onClick ToggleSync ] [ text ("Sync: " ++ toString sync) ]
    , div [ onClick ToggleExpand ] [ text ("Expand: " ++ toString expand) ]
    ]
  , filterView filterOptions
  ]


filterView : FilterOptions -> Html Msg
filterView filterOptions =
  div [ style filterViewStyle ] (List.map filterItemView filterOptions)


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
  div [ style modelViewStyle ] [ text (toString model) ]


msgListView : List m -> Html msg
msgListView msgList =
  div [ style panelStyle ] (List.map msgView msgList)


msgView : m -> Html msg
msgView msg =
  div [] [ text (toString msg) ]


-- Styles

panelStyle : List (String, String)
panelStyle =
  [ ("padding", "20px")
  ]

panelBorderStyle : List (String, String)
panelBorderStyle =
  [ ("border-bottom", "solid 1px #666")
  ]

debugViewStyle : List (String, String)
debugViewStyle =
  [ ("position", "fixed")
  , ("width", "250px")
  , ("top", "0")
  , ("right", "0")
  , ("bottom", "0")
  , ("background-color", "#444")
  , ("color", "#eee")
  ]

filterViewStyle : List (String, String)
filterViewStyle =
  [ ("background-color", "#333") ]
  ++ panelBorderStyle ++ panelStyle

headerViewStyle : List (String, String)
headerViewStyle =
  panelStyle

modelViewStyle : List (String, String)
modelViewStyle =
  [ ("height", "100px") ]
  ++ panelBorderStyle ++ panelStyle
