module TimeTravel.Internal.DiffView exposing (view) -- where

import TimeTravel.Internal.Model exposing (..)
import TimeTravel.Internal.Util exposing (..)
import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Icons as I

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.App as App

import Diff exposing (..)

import String


view : String -> String -> Html msg
view old new =
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
      [ style (S.diffView True) ]
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
