module TimeTravel.View exposing (view) -- where

import TimeTravel.Model exposing (..)
import TimeTravel.Util exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


view : Model model msg -> Html msg -> Html msg
view model original =
  div [] [ original, debugView model ]


debugView : Model model msg -> Html msg
debugView (Nel current past) =
  div
    [ style debugViewStyle ]
    [ headerView True True [("Tick", True)]
    , modelView current
    , msgListView (List.filterMap fst (current :: past))
    ]


headerView : Bool -> Bool -> FilterOptions -> Html msg
headerView sync expand filterOptions =
  div []
  [ div [ style headerViewStyle ] [ text (toString sync), text (toString expand) ]
  , filterView filterOptions
  ]


filterView : FilterOptions -> Html msg
filterView filterOptions =
  div [ style filterViewStyle ] (List.map filterItemView filterOptions)


filterItemView : (String, Bool) -> Html msg
filterItemView (name, visible) =
  div []
    [ label [] [ input [ type' "checkbox", checked visible ] [], text name ]
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
