module TimeTravel.Internal.Parser.Formatter exposing (..) -- where

import String
import Set exposing (Set)
import TimeTravel.Internal.Parser.AST as AST exposing (..)

type alias Context =
  { nest : Int
  , parens : Bool
  , wordsLimit : Int
  }


formatAsString : AST -> String
formatAsString ast =
  format { nest = 0, parens = False, wordsLimit = 40 } (fst <| AST.attachId 0 ast)


indent : Context -> String -> String
indent context s =
  (String.repeat context.nest "  ") ++ s


format : Context -> ASTX -> String
format c ast =
  case ast of
    RecordX id properties ->
      formatListLike id (indent c) c.wordsLimit "{" "}" (List.map (format { c | nest = c.nest + 1 }) properties)
    PropertyX id key value ->
      let
        s = format { c | parens = False, nest = c.nest + 1 } value
      in
        key ++ " = " ++
          ( if String.contains "\n" s || String.length (key ++ " = " ++ s) > c.wordsLimit then -- TODO not correct
              "\n" ++ indent { c | nest = c.nest + 1 } s
            else s
          )
    StringLiteralX id s ->
      "\"" ++ s ++ "\"" -- TODO replace quote
    ValueX id s ->
      s
    UnionX id tag tail ->
      let
        tailStr =
          List.map (format { c | nest = c.nest + 1, parens = True }) tail
        joinedTailStr =
          String.join "" tailStr
        multiLine =
          String.contains "\n" joinedTailStr || String.length (tag ++ joinedTailStr) > c.wordsLimit -- TODO not correct
        s =
          if multiLine then
            String.join "\n" (tag :: List.map (indent { c | nest = c.nest + 1 }) tailStr)
          else
            String.join " " (tag :: tailStr)
      in
        if (not (List.isEmpty tail)) && c.parens then
          "(" ++ s ++ (if multiLine then "\n" ++ indent c ")" else ")")
        else
          s
    ListLiteralX id list ->
      formatListLike id (indent c) c.wordsLimit "[" "]" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)
    TupleLiteralX id list ->
      formatListLike id (indent c) c.wordsLimit "(" ")" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)


formatListLike : AST.ASTId -> (String -> String) -> Int -> String -> String -> List String -> String
formatListLike id indent wordsLimit start end list =
  case list of
    head :: tail ->
      let
        tailStr =
          List.map (\s -> ", " ++ s) tail
        joinedStr =
          head ++ String.join "" tailStr
        long =
          String.length joinedStr > wordsLimit || String.contains "\n" joinedStr
      in
        if long then
          String.join "\n" <|
            (start ++ " " ++ head) :: List.map indent (tailStr ++ [end])
        else
          (start ++ " " ++ head) ++ String.join "" tailStr ++ " " ++ end
    _ ->
      start ++ end
