module TimeTravel.Internal.Parser.Parser exposing (..)


import Char
import Combine exposing (..)
import Combine.Num exposing (int, float)
import TimeTravel.Internal.Parser.AST exposing (..)
import TimeTravel.Internal.Parser.Util exposing (..)


parse : String -> Result String AST
parse s =
  case Combine.parse (spaced expression) s of
    Ok (_, _, ast) ->
      Ok ast

    Err (_, _, errors) ->
      Err (String.join "," errors)


----

expression : Parser s AST
expression =
  lazy (\_ ->
    union <|>
    expressionWithoutUnion
  )


expressionWithoutUnion : Parser s AST
expressionWithoutUnion =
  lazy (\_ ->
    record <|>
    listLiteral <|>
    tupleLiteral <|>
    internalStructure <|>
    stringLiteral <|>
    numberLiteral <|>
    null
  )


stringLiteral : Parser s AST
stringLiteral =
  map StringLiteral <|
    between (string "\"") (string "\"") (regex """(\\\\"|[^"])*""")


numberLiteral : Parser s AST
numberLiteral =
  map Value (regex "(\\-)?[0-9][0-9.]*")


internalStructure : Parser s AST
internalStructure =
  map Value (regex "<[^>]*>")


null : Parser s AST
null =
  map Value (regex "[a-z]+")


tupleLiteral : Parser s AST
tupleLiteral =
  lazy (\_ ->
  map TupleLiteral <| parens items
  )


listLiteral : Parser s AST
listLiteral =
  lazy (\_ ->
  map ListLiteral <| brackets items
  )


items : Parser s (List AST)
items =
  lazy (\_ ->
  spaced (sepBy comma (spaced expression))
  )


union : Parser s AST
union =
  lazy (\_ ->
  (\tag tail -> Union tag tail)
  <$> tag
  <*> many unionParam
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


singleUnion : Parser s AST
singleUnion =
  lazy (\_ ->
    map (\tag -> Union tag []) tag
  )


unionParam : Parser s AST
unionParam =
  lazy (\_ ->
  (\_ exp  -> exp)
  <$> spaces
  <*> (singleUnion <|> expressionWithoutUnion)
  )


tag : Parser s String
tag =
  regex "[A-Z][a-zA-Z0-9_.]*"


record : Parser s AST
record =
  lazy (\_ ->
  map Record <| braces properties
  )


properties : Parser s (List AST)
properties =
  lazy (\_ ->
  spaced (sepBy comma property)
  )


propertyKey : Parser s String
propertyKey =
  regex "[^ ]+"


property : Parser s AST
property =
  lazy (\_ ->
  (\_ key _ _ _ value _ -> Property key value)
  <$> spaces
  <*> propertyKey
  <*> spaces
  <*> equal
  <*> spaces
  <*> expression
  <*> spaces
  )
