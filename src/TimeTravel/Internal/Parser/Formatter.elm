module TimeTravel.Internal.Parser.Formatter exposing (..) -- where

import String
import Set exposing (Set)
import Html exposing (..)

import TimeTravel.Internal.Parser.AST as AST exposing (..)


type alias Context =
  { nest : Int
  , parens : Bool
  , wordsLimit : Int
  }


formatAsString : AST -> String
formatAsString ast =
  format2String <| format { nest = 0, parens = False, wordsLimit = 40 } (fst <| AST.attachId 0 ast)


indent : Context -> String
indent context =
  String.repeat context.nest "  "


format : Context -> ASTX -> List FoldableString
format c ast =
  case ast of
    RecordX id properties ->
      formatListLike id (indent c) c.wordsLimit "{" "}" (List.map (format { c | nest = c.nest + 1 }) properties)
    PropertyX id key value ->
      let
        s = format { c | parens = False, nest = c.nest + 1 } value
      in
        Plain (key ++ " = ") ::
          ( if True then --String.contains "\n" s || String.length (key ++ " = " ++ s) > c.wordsLimit then -- TODO not correct
              Plain ("\n" ++ indent { c | nest = c.nest + 1 }) :: s
            else s
          )
    StringLiteralX id s ->
      [Plain <|"\"" ++ s ++ "\""] -- TODO replace quote
    ValueX id s ->
      [Plain s]
    -- UnionX id tag tail ->
    --   let
    --     tailStr =
    --       List.map (format { c | nest = c.nest + 1, parens = True }) tail
    --     joinedTailStr =
    --       String.join "" tailStr
    --     multiLine =
    --       String.contains "\n" joinedTailStr || String.length (tag ++ joinedTailStr) > c.wordsLimit -- TODO not correct
    --     s =
    --       if multiLine then
    --         String.join "\n" (tag :: List.map (indent { c | nest = c.nest + 1 }) tailStr)
    --       else
    --         String.join " " (tag :: tailStr)
    --   in
    --     if (not (List.isEmpty tail)) && c.parens then
    --       "(" ++ s ++ (if multiLine then "\n" ++ indent c ")" else ")")
    --     else
    --       s
    ListLiteralX id list ->
      formatListLike id (indent c) c.wordsLimit "[" "]" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)
    TupleLiteralX id list ->
      formatListLike id (indent c) c.wordsLimit "(" ")" (List.map (format { c | parens = False, nest = c.nest + 1 }) list)
    _ -> []

---

type FoldableString =
  Plain String | Listed (List FoldableString) | Long Int String (List FoldableString)

joinX : String -> List FoldableString -> List FoldableString
joinX s list =
  case list of
    head :: tail -> head :: Plain s :: joinX s tail
    [] -> []

formatListLike : AST.ASTId -> String -> Int -> String -> String -> List (List FoldableString) -> List FoldableString
formatListLike id indent wordsLimit start end list =
  case list of
    [] ->
       [ Plain <| start ++ end ]
    _ ->
      let
        singleLine =
          Plain (start ++ " ") :: (joinX ", " (List.map Listed list) ++ [ Plain <| " " ++ end ])
        singleLineStr =
          format2String singleLine
        long = String.length singleLineStr > wordsLimit || String.contains "\n" singleLineStr
      in
        if long then
          [ Long id (start ++ " ... " ++ end)
              ( joinX ("\n" ++ indent ++ ", ") <|
                Plain start :: ((List.map Listed list) ++ [ Plain end ])
              )
          ]
        else
          singleLine



format2String : List FoldableString -> String
format2String list =
  format2Help identity format2String (\_ _ children -> format2String children) (String.join "") list

format2Html : Set Int -> List FoldableString -> List (Html msg)
format2Html folded list =
  format2Help
    (\s -> [pre [] [ text s ]])
    (\list -> format2Html folded list)
    (\id alt children ->
      if Set.member id folded then
        [ pre [{-onClick (ToggleModel id)-}] [ text alt ]]
      else
        format2Html folded children
    ) (List.concatMap identity) list

format2Help : (String -> a) -> (List FoldableString -> a) -> (Int -> String -> List FoldableString -> a) -> (List a -> b) -> List FoldableString -> b
format2Help formatPlain formatListed formatLong join list =
  join <|
  List.map (\str ->
    case str of
      Plain s -> formatPlain s
      Listed list -> formatListed list
      Long id alt s ->
        formatLong id alt s
    ) list
