module TimeTravel.Internal.View exposing (view)

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.MsgLike as MsgLike exposing (MsgLike(..))
import TimeTravel.Internal.Util.Nel as Nel exposing (..)
import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Icons as I
import TimeTravel.Internal.MsgTreeView as MsgTreeView
import TimeTravel.Internal.DiffView as DiffView
import TimeTravel.Internal.Parser.Formatter as Formatter
import TimeTravel.Internal.Parser.AST as AST exposing (ASTX)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.Keyed as Keyed
import Html.App as App

import String
import Set exposing (Set)
import InlineHover exposing (hover)


view : (msg -> a) -> (Msg -> a) -> (model -> Html msg) -> Model model msg data -> Html a
view transformUserMsg transformDebuggerMsg userViewFunc model =
  div
    []
    [ App.map transformUserMsg (userView userViewFunc model)
    , App.map transformDebuggerMsg (debugView model)
    ]


userView : (model -> Html msg) -> Model model msg data -> Html msg
userView userView model =
  case selectedItem model of
    Just item ->
      userView item.model
    Nothing ->
      text "Error: Unable to render"


debugView : Model model msg data -> Html Msg
debugView model =
  (if model.minimized then minimizedDebugView else normalDebugView) model


normalDebugView : Model model msg data -> Html Msg
normalDebugView model =
  div
    []
    [ resyncView model.sync
    , div
        [ style (S.debugView model.fixedToLeft) ]
        [ headerView model.fixedToLeft model.sync model.expand model.filter
        , msgListView
            model.filter
            model.selectedMsg
            (Nel.toList model.history)
            (detailView model)
        ]
    ]


minimizedDebugView : Model model msg data -> Html Msg
minimizedDebugView model =
  buttonView ToggleMinimize (S.minimizedButton model.fixedToLeft) [ I.minimize True ]


resyncView : Bool -> Html Msg
resyncView sync =
  if sync then
    text ""
  else
    div [ style (S.resyncView sync), onMouseDown Resync ] []


headerView : Bool -> Bool -> Bool -> FilterOptions -> Html Msg
headerView fixedToLeft sync expand filterOptions =
  div []
  [ div [ style S.headerView ]
    [ buttonView ToggleLayout (S.buttonView True) [ I.layout ]
    , buttonView ToggleMinimize (S.buttonView True) [ I.minimize False ]
    , buttonView ToggleSync (S.buttonView False) [ I.sync sync ]
    , buttonView ToggleExpand (S.buttonView False) [ I.filterExpand expand ]
    ]
  , filterView expand filterOptions
  ]


buttonView : msg -> List (String, String) -> List (Html msg) -> Html msg
buttonView onClickMsg buttonStyle inner =
  hover S.buttonHover div [ style buttonStyle, onClick onClickMsg ] inner


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


modelDetailView : Bool -> String -> Set AST.ASTId -> Maybe (Result String ASTX) -> model -> Html Msg
modelDetailView fixedToLeft modelFilter expandedTree lazyModelAst userModel =
  case lazyModelAst of
    Just (Ok ast) ->
      let
        modelFilterView =
          input
            [ style S.modelFilterInput
            , placeholder "Filter by property"
            , value modelFilter
            , onInput InputModelFilter
            ]
            []

        filtered =
          AST.filterById modelFilter ast

        each (id, ast) =
          div
            [ style S.modelDetailTreeEach ]
            ( ( if modelFilter == "" then
                  text ""
                else
                  hover
                    S.modelDetailTreeEachIdHover
                    div
                    [ style S.modelDetailTreeEachId
                    , onClick (SelectModelFilter id)
                    ]
                    [ text ("@" ++ id) ]
              ) ::
              Formatter.formatAsHtml ToggleModelTree expandedTree (Formatter.makeModel ast)
            )

        trees =
          List.map each filtered
      in
        div [ style (S.modelDetailView fixedToLeft) ] (modelFilterView :: trees)

    _ ->
      div [ style S.modelView ] [ text (toString userModel) ]



msgListView : FilterOptions -> Maybe Id -> List (HistoryItem model msg data) -> Html Msg -> Html Msg
msgListView filterOptions selectedMsg items detailView =
  div []
  [ detailView
  , Keyed.node "div"
      [ style S.msgListView ]
      ( filterMapUntilLimit 60 (msgView filterOptions selectedMsg) items )
  ]


msgView : FilterOptions -> Maybe Id -> (HistoryItem model msg data) -> Maybe (String, Html Msg)
msgView filterOptions selectedMsg { id, msg, causedBy } =
  let
    selected =
      case selectedMsg of
        Just msgId -> msgId == id
        Nothing -> False

    str =
      MsgLike.format msg

    visible =
      msg == Init ||
        case String.words str of
          tag :: _ ->
            List.any (\(name, visible) -> tag == name && visible) filterOptions
          _ ->
            False
  in
    if visible then
      Just (
        toString id
      , hover
          (S.msgViewHover selected)
          div
          [ style (S.msgView selected)
          , onClick (SelectMsg id)
          , title (toString id ++ ": " ++ str)
          ]
          [ text (toString id ++ ": " ++ str) ]
      )
    else
      Nothing


filterMapUntilLimit : Int -> (a -> Maybe b) -> List a -> List b
filterMapUntilLimit limit f list =
  List.reverse (filterMapUntilLimitHelp [] limit f list)


filterMapUntilLimitHelp : List b -> Int -> (a -> Maybe b) -> List a -> List b
filterMapUntilLimitHelp result limit f list =
  if limit <= 0 then
    result
  else
    case list of
      [] -> result
      h :: t ->
        case f h of
          Just b ->
            filterMapUntilLimitHelp (b :: result) (limit - 1) f t
          Nothing ->
            filterMapUntilLimitHelp result limit f t


detailView : Model model msg data -> Html Msg
detailView model =
  if not model.sync then
    let
      msgTreeView =
        case (model.selectedMsg, selectedMsgTree model) of
          (Just id, Just tree) ->
            MsgTreeView.view SelectMsg id tree
          _ ->
            text ""

      diffView =
        case selectedItem model of
          Just item ->
            case item.lazyDiff of
              Just changes ->
                DiffView.view changes
              Nothing ->
                text ""
          Nothing ->
            text ""

      detailedMsgView =
        case selectedMsgAst model of
          Just ast ->
            div
              [ style S.detailedMsgView ]
              [ text (Formatter.formatAsString (Formatter.makeModel ast)) ]

          Nothing ->
            text ""

      head =
        div
          [ style S.detailViewHead ]
          [ detailTab (S.detailTabModel model.fixedToLeft model.showModelDetail) (ToggleModelDetail True) "Model"
          , detailTab (S.detailTabDiff model.fixedToLeft (not model.showModelDetail)) (ToggleModelDetail False) "Messages and Diff"
          ]

      body =
        if model.showModelDetail then
          case selectedItem model of
            Just item ->
              modelDetailView
                model.fixedToLeft
                model.modelFilter
                model.expandedTree
                item.lazyModelAst
                item.model
              :: []
            _ ->
              []
        else
          [ msgTreeView
          , detailedMsgView
          , diffView
          ]

    in
      div
        [ style (S.detailView model.fixedToLeft True) ]
        ( head :: body )
  else
    text ""


detailTab : List (String, String) -> msg -> String -> Html msg
detailTab style' msg name =
  hover S.detailTabHover div [ style style', onClick msg ] [ text name ]
