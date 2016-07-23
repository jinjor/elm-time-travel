module TimeTravel.Internal.Parser.Formatter exposing (..)

import String
import Set exposing (Set)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import TimeTravel.Internal.Styles as S
import TimeTravel.Internal.Parser.AST as AST exposing (..)

import InlineHover exposing (hover)


type alias Context =
  { nest : Int
  , parens : Bool
  , wordsLimit : Int
  }


type FormatModel
  = Plain String
  | Link AST.ASTId String
  | Listed (List FormatModel)
  | Long AST.ASTId String (List FormatModel)


makeModel : ASTX -> FormatModel
makeModel =
  makeModelWithContext { nest = 0, parens = False, wordsLimit = 40 }


makeModelWithContext : Context -> ASTX -> FormatModel
makeModelWithContext c ast =
  case ast of
    RecordX id properties ->
      makeModelFromListLike True id (indent c) c.wordsLimit "{" "}" (List.map (makeModelWithContext { c | nest = c.nest + 1 }) properties)
    PropertyX id key value ->
      let
        s = makeModelWithContext { c | parens = False, nest = c.nest + 1 } value
        str = formatAsString s
      in
        Listed <|
          (Link id key) ::
          Plain " = " ::
          ( if String.contains "\n" str || String.length (key ++ " = " ++ str) > c.wordsLimit then -- TODO not correct
              [ Plain ("\n" ++ indent { c | nest = c.nest + 1 }), s ]
            else [s]
          )
    StringLiteralX id s ->
      Plain <|"\"" ++ s ++ "\""
    ValueX id s ->
      Plain s
    UnionX id tag tail ->
      let
        tailX =
          List.map (makeModelWithContext { c | nest = c.nest + 1, parens = True }) tail
        joinedTailStr =
          formatAsString (Listed tailX)
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
      makeModelFromListLike True id (indent c) c.wordsLimit "[" "]" (List.map (makeModelWithContext { c | parens = False, nest = c.nest + 1 }) list)
    TupleLiteralX id list ->
      makeModelFromListLike False id (indent c) c.wordsLimit "(" ")" (List.map (makeModelWithContext { c | parens = False, nest = c.nest + 1 }) list)


makeModelFromListLike : Bool -> AST.ASTId -> String -> Int -> String -> String -> List FormatModel -> FormatModel
makeModelFromListLike canFold id indent wordsLimit start end list =
  case list of
    [] ->
       Plain <| start ++ end
    _ ->
      let
        singleLine =
          Listed <| Plain (start ++ " ") :: ((joinX ", " list) ++ [ Plain <| " " ++ end ])
        singleLineStr =
          formatAsString singleLine
        long =
          String.length singleLineStr > wordsLimit || String.contains "\n" singleLineStr
      in
        if (indent /= "" && canFold) && long then
          Long id (start ++ " .. " ++ end)
            ( Plain (start ++ " ") :: ((joinX ("\n" ++ indent ++ ", ") list) ++ [Plain <| "\n" ++ indent] ++ [ Plain end ])
            )
        else if long then
          Listed ( Plain (start ++ " ") :: ((joinX ("\n" ++ indent ++ ", ") list) ++ [Plain <| "\n" ++ indent] ++ [ Plain end ])
          )
        else
          singleLine


indent : Context -> String
indent context =
  String.repeat context.nest "  "


joinX : String -> List FormatModel -> List FormatModel
joinX s list =
  case list of
    [] -> []
    [head] -> [head]
    head :: tail -> head :: Plain s :: joinX s tail


formatAsString : FormatModel -> String
formatAsString model =
  formatHelp
    identity
    (\_ s -> s)
    (String.join "" << List.map formatAsString)
    (\_ _ children -> String.join "" <| List.map formatAsString children)
    model


formatAsHtml : (AST.ASTId -> msg) -> (AST.ASTId -> msg) -> Set AST.ASTId -> FormatModel -> List (Html msg)
formatAsHtml selectFilterMsg toggleMsg expandedTree model =
  formatHelp
    formatPlainAsHtml
    (formatLinkAsHtml selectFilterMsg)
    (\list -> List.concatMap (formatAsHtml selectFilterMsg toggleMsg expandedTree) list)
    (\id alt children ->
      if Set.member id expandedTree then
        span
          [ style S.modelDetailFlagmentToggleExpand
          , onClick (toggleMsg id)
          ]
          [ text " - " ]
        :: List.concatMap (formatAsHtml selectFilterMsg toggleMsg expandedTree) children
      else
        [ span
            [ style S.modelDetailFlagmentToggle
            , onClick (toggleMsg id)
            ]
            [ text alt ]
        ]
    ) model


formatPlainAsHtml : String -> List (Html msg)
formatPlainAsHtml s =
   [ span
     ( [ style S.modelDetailFlagment ] ++
       if String.startsWith "\"" s then [ title s ] else []
      )
     [ text s ]
   ]


formatLinkAsHtml : (AST.ASTId -> msg) -> AST.ASTId -> String -> List (Html msg)
formatLinkAsHtml selectFilterMsg id s =
   [ hover
       S.modelDetailFlagmentLinkHover
       span
       [ style S.modelDetailFlagmentLink
       , onClick (selectFilterMsg id)
       ]
       [ text s ]
   ]


formatHelp
   : (String -> a)
  -> (AST.ASTId -> String -> a)
  -> (List FormatModel -> a)
  -> (AST.ASTId -> String -> List FormatModel -> a)
  -> FormatModel -> a
formatHelp formatPlain formatLink formatListed formatLong model =
  case model of
    Plain s ->
      formatPlain s
    Link id s ->
      formatLink id s
    Listed list ->
      formatListed list
    Long id alt s ->
      formatLong id alt s
