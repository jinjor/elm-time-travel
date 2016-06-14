module TimeTravel.Internal.MsgTreeView exposing (view) -- where

import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Util.RTree exposing (RTree(..))
import TimeTravel.Internal.Model exposing (HistoryItem)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import Diff exposing (..)

import String


view : RTree (HistoryItem model msg data) -> Html m
view tree =
  div
    [ style S.msgTreeView ]
    (viewHelp 0 tree)



viewHelp : Int -> RTree (HistoryItem model msg data) -> List (Html m)
viewHelp indent (Node item list) =
  div [] [ text (String.repeat indent "->" ++ toString item.id) ]
  :: List.concatMap (viewHelp (indent + 1)) list
