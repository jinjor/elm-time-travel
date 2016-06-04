module TimeTravel.Styles exposing (..) -- where


panel : List (String, String)
panel =
  [ ("padding", "20px")
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


filterView : List (String, String)
filterView =
  [ ("background-color", "#333") ]
  ++ panelBorder ++ panel


headerView : List (String, String)
headerView =
  panel


modelView : List (String, String)
modelView =
  [ ("height", "100px") ]
  ++ panelBorder ++ panel
