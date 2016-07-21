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
      ListLiteralX id (attachIdToList id children)

    TupleLiteral children ->
      TupleLiteralX id (attachIdToList id children)

    Value s ->
      ValueX id s

    Union tag children ->
      let
        id' = id ++ "." ++ tag
      in
        UnionX id' tag (attachIdToList id' children)

    Property key value ->
      let
        id' = id ++ "." ++ key
      in
        PropertyX id' key (attachId id' value)

attachIdToList : String -> List AST -> List ASTX
attachIdToList id list =
  List.indexedMap (\index p ->
    attachId (id ++ "." ++ toString index) p
  ) list


filterById : String -> ASTX -> List ASTX
filterById s ast =
  case ast of
    RecordX id children ->
      if String.contains s id then
        [ ast ]
      else
        List.concatMap (filterById s) children

    StringLiteralX id s ->
      if String.contains s id then
        [ ast ]
      else
        []

    ListLiteralX id children ->
      if String.contains s id then
        [ ast ]
      else
        List.concatMap (filterById s) children

    TupleLiteralX id children ->
      if String.contains s id then
        [ ast ]
      else
        List.concatMap (filterById s) children

    ValueX id v ->
      if String.contains s id then
        [ ast ]
      else
        []

    UnionX id tag children ->
      if String.contains s id then
        [ ast ]
      else
        List.concatMap (filterById s) children

    PropertyX id key value ->
      if String.contains s id then
        [ ast ]
      else
        filterById s value
