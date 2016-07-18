module TimeTravel.Internal.DiffView exposing (view)

import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Parser.AST exposing (ASTX)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import Diff exposing (..)
import String

type Line = Normal String | Delete String | Add String | Omit


lines : String -> List String
lines s =
  List.filter ((/=) "") <| String.lines s


view : List (Change String) -> Html msg
view changes =
  let
    list =
      List.concatMap (\change ->
        case change of
          NoChange s ->
            List.map Normal (lines s)
          Added new ->
            List.map Add (lines new)
          Removed old ->
            List.map Delete (lines old)
        ) changes

    linesView =
      List.map (\line ->
        case line of
          Normal s ->
            normalLine s
          Delete s ->
            deletedLine s
          Add s ->
            addedLine s
          Omit ->
            omittedLine
        ) (reduceLines list)
  in
    div
      [ style S.diffView ]
      linesView


reduceLines : List Line -> List Line
reduceLines list =
  let
    additionalLines = 2
    (tmp, result) =
      List.foldr (\line (tmp, result) ->
        case line of
          Normal s ->
            ((Normal s) :: tmp, result)
          Delete s ->
            tmpToResult additionalLines (Delete s) tmp result
          Add s ->
            tmpToResult additionalLines (Add s) tmp result
          _ -> (tmp, result)
        ) ([], []) list
  in
    if result == [] then
      -- no change found
      []
    else if List.length tmp > additionalLines then
      Omit :: (List.drop (List.length tmp - additionalLines) tmp ++ result)
    else
      tmp ++ result


tmpToResult : Int -> Line -> List Line -> List Line -> (List Line, List Line)
tmpToResult additionalLines next tmp result =
  if result == [] then
    ([], next :: (List.take additionalLines tmp ++ (if List.length tmp > additionalLines then [ Omit ] else [])))
  else if List.length tmp > (additionalLines * 2) then
    ([], next :: (List.take additionalLines tmp ++ [Omit] ++ List.drop (List.length tmp - additionalLines) tmp ++ result))
  else
    ([], next :: (tmp ++ result))


omittedLine : Html msg
omittedLine =
  div [ style S.omittedLine ] [ text "..." ]


deletedLine : String -> Html msg
deletedLine s =
  div [ style S.deletedLine ] [ text s ]


addedLine : String -> Html msg
addedLine s =
  div [ style S.addedLine ] [ text s ]


normalLine : String -> Html msg
normalLine s =
  div [ style S.normalLine ] [ text s ]
