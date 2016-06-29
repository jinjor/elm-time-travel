module TimeTravel.Internal.Parser.AST exposing (..)

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
