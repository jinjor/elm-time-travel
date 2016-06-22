module TimeTravel.Internal.Parser.Formatter exposing (..) -- where

import String
import Set exposing (Set)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Parser.AST as AST exposing (..)


type alias Context =
  { nest : Int
  , parens : Bool
  , wordsLimit : Int
  }


formatAsString : AST -> String
formatAsString ast =
  format2String <| format { nest = 0, parens = False, wordsLimit = 40 } (fst <| AST.attachId 0 ast)

formatAsHtml : (Int -> msg) -> Set Int -> AST -> List (Html msg)
formatAsHtml transformMsg folded ast =
  format2Html transformMsg folded <| format { nest = 0, parens = False, wordsLimit = 40 } (fst <| AST.attachId 0 ast)


indent : Context -> String
indent context =
  String.repeat context.nest "  "


format : Context -> ASTX -> FoldableString
format c ast =
  case ast of
    RecordX id properties ->
      formatListLike id (indent c) c.wordsLimit "{" "}" (List.map (format { c | nest = c.nest + 1 }) properties)
    PropertyX id key value ->
      let
        s = format { c | parens = False, nest = c.nest + 1 } value
        str = format2String s
      in
        Listed <|
        Plain (key ++ " = ") ::
          ( if String.contains "\n" str || String.length (key ++ " = " ++ str) > c.wordsLimit then -- TODO not correct
              [ Plain ("\n" ++ indent { c | nest = c.nest + 1 }), s ]
            else [s]
          )
    StringLiteralX id s ->
      Plain <|"\"" ++ s ++ "\"" -- TODO replace quote
    ValueX id s ->
      Plain s
    UnionX id tag tail ->
      let
        tailX =
          List.map (format { c | nest = c.nest + 1, parens = True }) tail
        joinedTailStr =
          format2String (Listed tailX)
        multiLine =
          String.contains "\n" joinedTailStr || String.length (tag ++ joinedTailStr) > c.wordsLimit -- TODO not correct
        s =
          Listed <|
            if multiLine then
              Plain (tag ++ "\n" ++ indent { c | nest = c.nest + 1 }) :: joinX ("\n" ++ indent { c | nest = c.nest + 1 }) tailX
            else
              joinX " " (Plain tag :: tailX)
      in
        if (not (List.isEmpty tail)) && c.parens then
          Listed [ Plain "(", s, Plain (if multiLine then ("\n" ++ indent c ++ ")") else ")") ]
        else
          s
    ListLiteralX id list ->
      formatListLike id (indent c) c.wordsLimit "[" "]" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)
    TupleLiteralX id list ->
      formatListLike id (indent c) c.wordsLimit "(" ")" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)

---

type FoldableString =
  Plain String | Listed (List FoldableString) | Long Int String (List FoldableString)

joinX : String -> List FoldableString -> List FoldableString
joinX s list =
  case list of
    [] -> []
    [head] -> [head]
    head :: tail -> head :: Plain s :: joinX s tail


formatListLike : AST.ASTId -> String -> Int -> String -> String -> List FoldableString -> FoldableString
formatListLike id indent wordsLimit start end list =
  case list of
    [] ->
       Plain <| start ++ end
    _ ->
      let
        singleLine =
          Listed <| Plain (start ++ " ") :: ((joinX ", " list) ++ [ Plain <| " " ++ end ])
        singleLineStr =
          format2String singleLine
        long = String.length singleLineStr > wordsLimit || String.contains "\n" singleLineStr
      in
        if long then
          Long id (start ++ " ... " ++ end)
            ( Plain (start ++ " ") :: ((joinX ("\n" ++ indent ++ ", ") list) ++ [Plain <| "\n" ++ indent] ++ [ Plain end ])
            )
        else
          singleLine


format2String : FoldableString -> String
format2String fstr =
  format2Help
    identity
    (String.join "" << List.map format2String)
    (\_ _ children -> String.join "" <| List.map format2String children)
    fstr

format2Html : (Int -> msg) -> Set Int -> FoldableString -> List (Html msg)
format2Html transformMsg folded fstr =
  format2Help
    (\s -> [span [ style S.modelDetailFlagment ] [ text s ]])
    (\list -> List.concatMap (format2Html transformMsg folded) list)
    (\id alt children ->
      if Set.member id folded then
        [ span [ style S.modelDetailFlagmentToggle, onClick (transformMsg id) ] [ text alt ]]
      else
        List.concatMap (format2Html transformMsg folded) children
    ) fstr

format2Help : (String -> a) -> (List FoldableString -> a) -> (Int -> String -> List FoldableString -> a) -> FoldableString -> a
format2Help formatPlain formatListed formatLong fstr =
  case fstr of
    Plain s ->
      formatPlain s
    Listed list ->
      formatListed list
    Long id alt s ->
      formatLong id alt s
