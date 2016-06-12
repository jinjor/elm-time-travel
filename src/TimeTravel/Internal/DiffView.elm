module TimeTravel.Internal.DiffView exposing (view) -- where

import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Parser.AST exposing (AST)
import TimeTravel.Internal.Parser.Formatter as Formatter

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import Diff exposing (..)

import String


view : Bool -> AST -> AST -> Html msg
view fixedToLeft oldAst newAst =
  viewDiff fixedToLeft (Formatter.formatAsString oldAst) (Formatter.formatAsString newAst)

viewDiff : Bool -> String -> String -> Html msg
viewDiff fixedToLeft old new =
  let
    changes = diffLines old new
    list =
      List.concatMap (\change ->
        case change of
          NoChange s ->
            List.map normalLine (String.lines s)
          Changed old new ->
            List.map deletedLine (String.lines old) ++
            List.map addedLine (String.lines new)
          Added new ->
            List.map addedLine (String.lines new)
          Removed old ->
            List.map deletedLine (String.lines old)
        ) changes
  in
    div
      [ style (S.diffView fixedToLeft True) ]
      list


deletedLine : String -> Html msg
deletedLine s =
  div [ style S.deletedLine ] [ text s ]


addedLine : String -> Html msg
addedLine s =
  div [ style S.addedLine ] [ text s ]


normalLine : String -> Html msg
normalLine s =
  div [ style S.normalLine ] [ text s ]
