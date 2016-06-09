module TimeTravel.Internal.Parser.Formatter exposing (..) -- where

import String
import TimeTravel.Internal.Parser.AST exposing (..)

type alias Context =
  { nest : Int
  , parens : Bool
  }


formatAsString : AST -> String
formatAsString ast =
  format { nest = 0, parens = False } ast


indent : Context -> String -> String
indent context s =
  (String.repeat context.nest "  ") ++ s


format : Context -> AST -> String
format c ast =
  case ast of
    Record properties ->
      formatListLike (indent c) "{" "}" (List.map (format { c | nest = c.nest + 1 }) properties)
    Property key value ->
      let
        s = format { c | parens = False, nest = c.nest + 1 } value
      in
        key ++ " = " ++
          ( if String.contains "\n" s || String.length (key ++ " = " ++ s) > 80 then -- TODO not correct
              "\n" ++ indent { c | nest = c.nest + 1 } s
            else s
          )
    StringLiteral s ->
      "\"" ++ s ++ "\"" -- TODO replace quote
    Value s ->
      s
    Union tag tail ->
      let
        tailStr =
          List.map (format { c | nest = c.nest + 1, parens = True }) tail
        multiLine =
          List.any (String.contains "\n") tailStr
        s =
          if multiLine then
            String.join "\n" (tag :: List.map (indent { c | nest = c.nest + 1 }) tailStr)
          else
            String.join " " (tag :: tailStr)
      in
        if (not (List.isEmpty tail)) && c.parens then
          "(" ++ s ++ (if Debug.log "multiLine" multiLine then "\n" ++ indent c ")" else ")")
        else
          s
    ListLiteral list ->
      formatListLike (indent c) "[" "]" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)
    TupleLiteral list ->
      formatListLike (indent c) "(" ")" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)


formatListLike : (String -> String) -> String -> String -> List String -> String
formatListLike indent start end list =
  case list of
    head :: tail ->
      let
        tailStr =
          List.map (\s -> ", " ++ s) tail ++ [end]
        joinedStr =
          head ++ String.join "" tailStr
      in
        if String.length joinedStr > 80 || String.contains "\n" joinedStr then
          String.join "\n" <|
            (start ++ " " ++ head) :: List.map indent tailStr
        else
          (start ++ head) ++ String.join "" tailStr
    _ ->
      start ++ end
