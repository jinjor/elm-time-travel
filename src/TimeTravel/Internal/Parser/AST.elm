module TimeTravel.Internal.Parser.AST exposing (..)

import String

type AST
  = Record (List AST)
  | StringLiteral String
  | ListLiteral (List AST)
  | TupleLiteral (List AST)
  | Value String
  | Union String (List AST)
  | Property String AST

type alias ASTId = String

type ASTX
  = RecordX ASTId (List ASTX)
  | StringLiteralX ASTId String
  | ListLiteralX ASTId (List ASTX)
  | TupleLiteralX ASTId (List ASTX)
  | ValueX ASTId String
  | UnionX ASTId String (List ASTX)
  | PropertyX ASTId String ASTX


attachId : String -> AST -> ASTX
attachId id ast =
  case ast of
    Record children ->
      RecordX id (attachIdToList id children)

    StringLiteral s ->
      StringLiteralX id s

    ListLiteral children ->
      ListLiteralX id (attachIdToListWithIndex id children)

    TupleLiteral children ->
      case children of
        -- don't count (x) as tupple
        [x] ->
          TupleLiteralX id (attachIdToList id children)
        _ ->
          TupleLiteralX id (attachIdToListWithIndex id children)

    Value s ->
      ValueX id s

    Union tag children ->
      let
        id' = id ++ "." ++ tag
      in
        UnionX id' tag (attachIdToListWithIndex id' children)

    Property key value ->
      let
        id' = id ++ "." ++ key
      in
        PropertyX id' key (attachId id' value)


attachIdToList : String -> List AST -> List ASTX
attachIdToList id list =
  List.map (attachId id) list


attachIdToListWithIndex : String -> List AST -> List ASTX
attachIdToListWithIndex id list =
  List.indexedMap (\index p ->
    attachId (id ++ "." ++ toString index) p
  ) list


filterById : String -> ASTX -> List (ASTId, ASTX)
filterById s ast =
  case ast of
    RecordX id children ->
      if match s id then
        [ (id, ast) ]
      else
        List.concatMap (filterById s) children

    StringLiteralX id v ->
      if match s id then
        [ (id, ast) ]
      else
        []

    ListLiteralX id children ->
      if match s id then
        [ (id, ast) ]
      else
        List.concatMap (filterById s) children

    TupleLiteralX id children ->
      if match s id then
        [ (id, ast) ]
      else
        List.concatMap (filterById s) children

    ValueX id v ->
      if match s id then
        [ (id, ast) ]
      else
        []

    UnionX id tag children ->
      if match s id then
        [ (id, ast) ]
      else
        List.concatMap (filterById s) children

    PropertyX id key value ->
      if match s id then
        [ (id, ast) ]
      else
        filterById s value


match : String -> String -> Bool
match s id =
  String.contains (String.toLower s) (String.toLower id)
