module TimeTravel.Internal.Styles exposing (..) -- where


zIndex = { modelDetailView = "2147483646", debugView = "2147483646", resyncView = "2147483645" }


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
  , ("font-family", "calibri, helvetica, arial, sans-serif")
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



modelViewContainer : List (String, String)
modelViewContainer =
  []


modelView : List (String, String)
modelView =
  [ ("height", "150px")
  , ("box-sizing", "border-box")
  ]
  ++ panelBorder ++ panel True


modelDetailView : Bool -> List (String, String)
modelDetailView fixedToLeft =
  [ ("width", "360px")
  , ("position", "absolute")
  , (if fixedToLeft then "margin-right" else "margin-left", "-360px")
  -- , (if fixedToLeft then "left" else "right", "0")
  , ("z-index", zIndex.modelDetailView)
  , ("box-sizing", "border-box")
  ] ++ subPain fixedToLeft ++ debugViewTheme ++ panel True


modelDetailFlagment : List (String, String)
modelDetailFlagment =
  [ ("white-space", "pre")
  , ("display", "inline")
  ]


modelDetailFlagmentToggle : List (String, String)
modelDetailFlagmentToggle =
  [ ("white-space", "pre")
  , ("display", "inline")
  , ("background-color", "#777")
  , ("cursor", "pointer")
  ]


modelDetailFlagmentToggleExpand : List (String, String)
modelDetailFlagmentToggleExpand =
  [ ("position", "relative")
  , ("left", "-16px")
  , ("margin-right", "-14px")
  ] ++ modelDetailFlagmentToggle


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


subPain : Bool -> List (String, String)
subPain fixedToLeft =
  [ ( "box-shadow"
    , if fixedToLeft then
        "rgba(0, 0, 0, 0.15) 5px 0px 15px inset"
      else
        "rgba(0, 0, 0, 0.15) -5px 0px 15px inset")
  ]

detailView : Bool -> Bool -> List (String, String)
detailView fixedToLeft opened =
  [ ("position", "absolute")
  , ("width", "320px")
  , (if fixedToLeft then "right" else "left", "-320px")
  , ("box-sizing", "border-box")
  ] ++ subPain fixedToLeft ++ debugViewTheme


msgTreeView : List (String, String)
msgTreeView =
  panel True ++ panelBorder


detailedMsgView : List (String, String)
detailedMsgView =
  [ ("white-space", "pre") ] ++ panel True ++ panelBorder

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


omittedLine : List (String, String)
omittedLine =
  lineBase


normalLine : List (String, String)
normalLine =
  lineBase


deletedLine : List (String, String)
deletedLine =
  [ ("background-color", "rgba(255, 100, 100, 0.15)")
  ] ++ lineBase


addedLine : List (String, String)
addedLine =
  [ ("background-color", "rgba(100, 255, 100, 0.15)")
  ] ++ lineBase
