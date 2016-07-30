module TimeTravel.Internal.Styles exposing (..)


zIndex = { modelDetailView = "2147483646", debugView = "2147483646", resyncView = "2147483645" }


textLinkHover : List (String, String)
textLinkHover =
  [ ("text-decoration", "underline") ]


button : List (String, String)
button =
  [ ("padding", "10px")
  , ("border", "solid 1px #666")
  , ("border-radius", "3px")
  , ("cursor", "pointer")
  ]


buttonHover : List (String, String)
buttonHover =
  [ ("background-color", "#555")
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
  (if left then [("margin-right", "auto")] else [ ("margin-left", "auto")])
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
  , ("font-size", "14px")
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


minimizedButton : Bool -> List (String, String)
minimizedButton fixedToLeft =
  [ ("position", "fixed")
  , ("bottom", "0")
  , (if fixedToLeft then "left" else "right", "0")
  , ("z-index", zIndex.debugView)
  ] ++ iconButton ++ debugViewTheme


modelViewContainer : List (String, String)
modelViewContainer =
  []


modelView : List (String, String)
modelView =
  [ ("height", "150px")
  , ("box-sizing", "border-box")
  ]
  ++ panelBorder ++ panel True


modelFilterInput : List (String, String)
modelFilterInput =
  [ ("display", "block")
  , ("width", "100%")
  , ("padding", "5px 10px")
  , ("background-color", "rgba(0,0,0,0.2)")
  , ("margin-bottom", "10px")
  , ("border", "none")
  , ("box-shadow", "2px 1px 7px 0px rgba(0,0,0,0.4) inset")
  , ("color", "#eee")
  , ("font-size", "14px")
  , ("width", "100%")
  , ("box-sizing", "border-box")
  ]


modelDetailTreeEachId : List (String, String)
modelDetailTreeEachId =
  [ ("color", "#999")
  , ("cursor", "pointer")
  ]


modelDetailTreeEachIdHover : List (String, String)
modelDetailTreeEachIdHover =
  textLinkHover


modelDetailTreeEachIdWatch : List (String, String)
modelDetailTreeEachIdWatch =
  modelDetailTreeEachId


modelDetailTreeEachIdWatchHover : List (String, String)
modelDetailTreeEachIdWatchHover =
  modelDetailTreeEachIdHover


modelDetailTreeEach : List (String, String)
modelDetailTreeEach =
  [ ("margin-bottom", "20px") ]


modelDetailView : Bool -> List (String, String)
modelDetailView fixedToLeft =
  [ ("width", "320px")
  , ("z-index", zIndex.modelDetailView)
  , ("box-sizing", "border-box")
  , ("height", "100%")
  , ("overflow-y", "scroll")
  ] ++ --panel True
  [ ("padding", "20px")
  , ("overflow-x", "hidden")
  , ("overflow-y", "scroll")
  ]


modelDetailFlagment : List (String, String)
modelDetailFlagment =
  [ ("white-space", "pre")
  , ("display", "inline")
  ]


modelDetailFlagmentLink : List (String, String)
modelDetailFlagmentLink =
  [("cursor", "pointer")] ++ modelDetailFlagment


modelDetailFlagmentLinkHover : List (String, String)
modelDetailFlagmentLinkHover =
  textLinkHover


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


watchView : List (String, String)
watchView =
  panel True ++ panelBorder


msgListView : List (String, String)
msgListView =
  panel True


itemBackground : Bool -> List (String, String)
itemBackground selected =
  [ ("background-color", if selected then "rgba(0, 0, 0, 0.5)" else "")
  ]


msgViewHover : Bool -> List (String, String)
msgViewHover selected =
  if selected then [] else [ ("background-color", "#555") ]


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
        "rgba(0, 0, 0, 0.15) 6px -3px 6px inset"
      else
        "rgba(0, 0, 0, 0.15) -6px -3px 6px inset")
  ]


detailView : Bool -> Bool -> List (String, String)
detailView fixedToLeft opened =
  [ ("position", "absolute")
  , ("width", "320px")
  , (if fixedToLeft then "right" else "left", "-320px")
  , ("box-sizing", "border-box")
  , ("height", "calc(100% - 87px)")
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


msgTreeViewItemRowHover : Bool -> List (String, String)
msgTreeViewItemRowHover selected =
  if selected then [] else [ ("background-color", "#555") ]


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


diffOrModelDetailViewContainer : List (String, String)
diffOrModelDetailViewContainer =
  [ ("position", "relative")
  ]


toggleModelDetailIcon : List (String, String)
toggleModelDetailIcon =
  [ ("right", "20px")
  , ("top", "20px")
  , ("position", "absolute")
  ] ++ iconButton ++ debugViewTheme

subHeaderView : List (String, String)
subHeaderView =
  headerView ++ panelBorder


detailViewHead : List (String, String)
detailViewHead =
  []


detailTab : Bool -> List (String, String)
detailTab active =
  [ ("border-radius", "3px 3px 0 0")
  , ("height", "30px")
  , ("top", "-30px")
  , ("cursor", "pointer")
  , ("position", "absolute")
  , ("text-align", "center")
  , ("line-height", "30px")
  ] ++
  ( if active then
      []
    else
      [ ("box-shadow", "rgba(0, 0, 0, 0.25) 0px -1px 5px inset") ]
  ) ++ debugViewTheme


detailTabHover : List (String, String)
detailTabHover =
  [ ("background-color", "#555")
  ]


detailTabModel : Bool -> Bool -> List (String, String)
detailTabModel fixedToLeft active =
   [ ("width", "130px")
   , ("left", if fixedToLeft then "10px" else "0")
   ] ++ detailTab active


detailTabDiff : Bool -> Bool -> List (String, String)
detailTabDiff fixedToLeft active =
   [ ("width", "170px")
   , ("left", if fixedToLeft then "150px" else "140px")
   ] ++ detailTab active
