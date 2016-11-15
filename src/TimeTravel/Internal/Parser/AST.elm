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
        id_ = id ++ "." ++ tag
      in
        UnionX id_ tag (attachIdToListWithIndex id_ children)

    Property key value ->
      let
        id_ = id ++ "." ++ key
      in
        PropertyX id_ key (attachId id_ value)


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


filterByExactId : String -> ASTX -> Maybe ASTX
filterByExactId s ast =
  case ast of
    RecordX id children ->
      if s == id then
        Just ast
      else if String.length s < String.length id then
        Nothing
      else
        filterByExactIdForList s children

    StringLiteralX id v ->
      if s == id then
        Just ast
      else
        Nothing

    ListLiteralX id children ->
      if s == id then
        Just ast
      else if String.length s < String.length id then
        Nothing
      else
        filterByExactIdForList s children

    TupleLiteralX id children ->
      if s == id then
        Just ast
      else if String.length s < String.length id then
        Nothing
      else
        filterByExactIdForList s children

    ValueX id v ->
      if s == id then
        Just ast
      else
        Nothing

    UnionX id tag children ->
      if s == id then
        Just ast
      else if String.length s < String.length id then
        Nothing
      else
        filterByExactIdForList s children

    PropertyX id key value ->
      if s == id then
        Just ast
      else if String.length s < String.length id then
        Nothing
      else
        filterByExactId s value


filterByExactIdForList : String -> List ASTX -> Maybe ASTX
filterByExactIdForList s list =
  case list of
    [] ->
      Nothing

    ast :: tail ->
      case filterByExactId s ast of
        Nothing ->
          filterByExactIdForList s tail

        found ->
          found
