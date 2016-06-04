module TimeTravel.Styles exposing (..) -- where


panel : Bool -> List (String, String)
panel visible =
  [ ("padding", if visible then "20px" else "0 20px")
  , ("overflow", "hidden")
  ]


panelBorder : List (String, String)
panelBorder =
  [ ("border-bottom", "solid 1px #666")
  ]


debugView : List (String, String)
debugView =
  [ ("position", "fixed")
  , ("width", "250px")
  , ("top", "0")
  , ("right", "0")
  , ("bottom", "0")
  , ("background-color", "#444")
  , ("color", "#eee")
  ]


filterView : Bool -> List (String, String)
filterView visible =
  [ ("background-color", "#333")
  , ("transition", "height ease 0.3s, padding ease 0.3s")
  , ("height", if visible then "" else "0")
  ]
  ++ panelBorder ++ panel visible


headerView : List (String, String)
headerView =
  panel True


modelView : List (String, String)
modelView =
  [ ("height", "100px") ]
  ++ panelBorder ++ panel True


msgListView : List (String, String)
msgListView =
  panel True
