module TimeTravel.Internal.Styles exposing (..) -- where


zIndex = { debugView = "2147483647", resyncView = "2147483646" }


button : List (String, String)
button =
  [ ("padding", "10px")
  , ("border", "solid 1px #666")
  , ("border-radius", "3px")
  , ("cursor", "pointer")
  ]


pointer : List (String, String)
pointer =
  [ ("cursor", "pointer") ]


iconButton : List (String, String)
iconButton =
  [ ("padding", "10px 10px 6px 10px") -- workaround
  , ("border", "solid 1px #666")
  , ("border-radius", "3px")
  ] ++ pointer


buttonView : Bool -> List (String, String)
buttonView left =
  (if left then [("margin-right", "auto")] else [ ("margin-left", "7px")])
  ++ iconButton


panel : Bool -> List (String, String)
panel visible =
  [ ("padding", if visible then "20px" else "0 20px")
  , ("overflow", "hidden")
  ]


panelBorder : List (String, String)
panelBorder =
  [ ("border-bottom", "solid 1px #666")
  ]


debugViewTheme : List (String, String)
debugViewTheme =
  [ ("background-color", "#444")
  , ("color", "#eee")
  ]

debugView : Bool -> List (String, String)
debugView fixedToLeft =
  [ ("position", "fixed")
  , ("width", "250px")
  , ("top", "0")
  , (if fixedToLeft then "left" else "right", "0")
  , ("bottom", "0")
  , ("z-index", zIndex.debugView)
  ] ++ debugViewTheme


filterView : Bool -> List (String, String)
filterView visible =
  [ ("background-color", "#333")
  , ("transition", "height ease 0.3s, padding ease 0.3s")
  , ("height", if visible then "" else "0")
  ]
  ++ panelBorder ++ panel visible


headerView : List (String, String)
headerView =
  [ ("display", "flex")
  , ("justify-content", "flex-end")
  ] ++ panel True


modelView : List (String, String)
modelView =
  [ ("height", "100px") ]
  ++ panelBorder ++ panel True


msgListView : List (String, String)
msgListView =
  panel True


itemBackground : Bool -> List (String, String)
itemBackground selected =
  [ ("background-color", if selected then "rgba(0, 0, 0, 0.5)" else "")
  ]

msgView : Bool -> List (String, String)
msgView selected =
  [ ("white-space", "nowrap")
  , ("text-overflow", "ellipsis")
  , ("overflow", "hidden")
  ]
  ++ itemBackground selected ++ pointer


resyncView : Bool -> List (String, String)
resyncView sync =
  [ ("z-index", zIndex.resyncView)
  , ("position", "fixed")
  , ("top", "0")
  , ("bottom", "0")
  , ("left", "0")
  , ("right", "0")
  , ("background-color", "rgba(0, 0, 0, 0.15)")
  , ("opacity", if sync then "0" else "1")
  , ("pointer-events", if sync then "none" else "")
  , ("transition", "opacity ease 0.5s")
  ]


detailView : Bool -> Bool -> List (String, String)
detailView fixedToLeft opened =
  [ ("position", "absolute")
  , ("width", "320px")
  , (if fixedToLeft then "right" else "left", "-320px")
  , ("box-sizing", "border-box")
  , ( "box-shadow"
    , if fixedToLeft then
        "rgba(0, 0, 0, 0.15) 5px 0px 15px inset"
      else
        "rgba(0, 0, 0, 0.15) -5px 0px 15px inset")
  ] ++ debugViewTheme


msgTreeView : List (String, String)
msgTreeView =
  panel True ++ panelBorder


msgTreeViewItemRow : Bool -> List (String, String)
msgTreeViewItemRow selected =
  [ ("white-space", "pre")
  , ("text-overflow", "ellipsis")
  , ("overflow", "hidden")
  ]
  ++ itemBackground selected ++ pointer


diffView : List (String, String)
diffView =
  panel True


lineBase : List (String, String)
lineBase =
  [ ("padding-left", "10px")
  , ("white-space", "pre")
  ]

normalLine : List (String, String)
normalLine =
  [ --("background-color", "rgba(100, 100, 100, 0.15)")
  ] ++ lineBase


deletedLine : List (String, String)
deletedLine =
  [ ("background-color", "rgba(255, 100, 100, 0.15)")
  ] ++ lineBase


addedLine : List (String, String)
addedLine =
  [ ("background-color", "rgba(100, 255, 100, 0.15)")
  ] ++ lineBase
