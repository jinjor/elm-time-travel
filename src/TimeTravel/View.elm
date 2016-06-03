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
    [ style
        [ ("position", "fixed")
        , ("width", "250px")
        , ("top", "0")
        , ("right", "0")
        , ("bottom", "0")
        , ("background-color", "#444")
        , ("color", "#eee")
        ]
    ]
    [ modelView current
    , msgListView (List.filterMap fst (current :: past))
    ]

panel : List (String, String)
panel =
  [ ("padding", "20px")
  ]

modelViewStyle : List (String, String)
modelViewStyle =
  [ ("height", "100px")
  , ("border-bottom", "solid 1px #666")
  ] ++ panel

modelView : model -> Html msg
modelView model =
  div
    [ style modelViewStyle ] [ text (toString model) ]


msgListView : List m -> Html msg
msgListView msgList =
  div [ style panel ] (List.map msgView msgList)


msgView : m -> Html msg
msgView msg =
  div [] [ text (toString msg) ]
