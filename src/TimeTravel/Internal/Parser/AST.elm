module TimeTravel.Internal.Parser.AST exposing (..) -- where

type AST
  = Record (List AST)
  | StringLiteral String
  | ListLiteral (List AST)
  | TupleLiteral (List AST)
  | Value String
  | Union String (List AST)
  | Property String AST

type alias ASTId = Int

type ASTX
  = RecordX ASTId (List ASTX)
  | StringLiteralX ASTId String
  | ListLiteralX ASTId (List ASTX)
  | TupleLiteralX ASTId (List ASTX)
  | ValueX ASTId String
  | UnionX ASTId String (List ASTX)
  | PropertyX ASTId String ASTX


attachId : Int -> AST -> (ASTX, Int)
attachId id ast =
  case ast of
    Record children ->
      let
        (childrenX, nextId) =
          attachIdToList id children
      in
        (RecordX nextId childrenX, nextId + 1)
    StringLiteral s ->
      (StringLiteralX id s, id + 1)
    ListLiteral children ->
      let
        (childrenX, nextId) =
          attachIdToList id children
      in
        (ListLiteralX nextId childrenX, nextId + 1)
    TupleLiteral children ->
      let
        (childrenX, nextId) =
          attachIdToList id children
      in
        (TupleLiteralX nextId childrenX, nextId + 1)
    Value s ->
      (ValueX id s, id + 1)
    Union tag children ->
      let
        (childrenX, nextId) =
          attachIdToList id children
      in
        (UnionX nextId tag childrenX, nextId + 1)
    Property key value ->
      let
        (resX, nextId) = attachId id value
      in
        (PropertyX nextId key resX, nextId + 1)

attachIdToList : Int -> List AST -> (List ASTX, Int)
attachIdToList id list =
  List.foldr (\p (list, id) ->
    let
      (res, nextId) = attachId id p
    in
      (res :: list, nextId)
  ) ([], id) list
