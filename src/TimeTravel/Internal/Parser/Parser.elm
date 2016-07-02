module TimeTravel.Internal.Parser.Parser exposing (..)


import Char
import Combine exposing (..)
import Combine.Num exposing (int, float)
import String
import TimeTravel.Internal.Parser.AST exposing (..)
import TimeTravel.Internal.Parser.Util exposing (..)


parse : String -> Result String AST
parse s = Result.formatError (String.join ",") (fst <| Combine.parse (spaced expression) s)


----

expression : Parser AST
expression =
  rec (\_ ->
    union `or`
    expressionWithoutUnion
  )


expressionWithoutUnion : Parser AST
expressionWithoutUnion =
  rec (\_ ->
    record `or`
    listLiteral `or`
    tupleLiteral `or`
    internalStructure `or`
    stringLiteral `or`
    numberLiteral `or`
    null
  )


stringLiteral : Parser AST
stringLiteral =
  map StringLiteral <|
    between (string "\"") (string "\"") (regex """(\\\\"|[^"])*""")


numberLiteral : Parser AST
numberLiteral =
  map Value (regex "(\\-)?[0-9][0-9.]*")


internalStructure : Parser AST
internalStructure =
  map Value (regex "<[^>]*>")


null : Parser AST
null =
  map Value (regex "[a-z]+")


tupleLiteral : Parser AST
tupleLiteral =
  rec (\_ ->
  map TupleLiteral <| parens items
  )


listLiteral : Parser AST
listLiteral =
  rec (\_ ->
  map ListLiteral <| brackets items
  )


items : Parser (List AST)
items =
  rec (\_ ->
  spaced (sepBy comma (spaced expression))
  )


union : Parser AST
union =
  rec (\_ ->
  (\tag tail -> Union tag tail)
  `map` tag
  `andMap` many unionParam
  )


-- assuming things like `True 1` never come (effective, but unsafe)
-- union : Parser AST
-- union =
--   rec (\_ ->
--     tag `andThen` \s ->
--       if s == "True" || s == "False" || s == "Nothing" then
--         succeed (Union s [])
--       else if s == "Just" || s == "Ok" || s == "Err" then
--         (\param -> Union s [param]) `map` unionParam
--       else
--         (\tail -> Union s tail) `map` many unionParam
--   )


singleUnion : Parser AST
singleUnion =
  rec (\_ ->
    map (\tag -> Union tag []) tag
  )


unionParam : Parser AST
unionParam =
  rec (\_ ->
  (\_ exp  -> exp)
  `map` spaces
  `andMap` (singleUnion `or` expressionWithoutUnion)
  )


tag : Parser String
tag =
  regex "[A-Z][a-zA-Z0-9_.]*"


record : Parser AST
record =
  rec (\_ ->
  map Record <| braces properties
  )


properties : Parser (List AST)
properties =
  rec (\_ ->
  spaced (sepBy comma property)
  )


propertyKey : Parser String
propertyKey =
  regex "[^ ]+"


property : Parser AST
property =
  rec (\_ ->
  (\_ key _ _ _ value _ -> Property key value)
  `map` spaces
  `andMap` propertyKey
  `andMap` spaces
  `andMap` equal
  `andMap` spaces
  `andMap` expression
  `andMap` spaces
  )
