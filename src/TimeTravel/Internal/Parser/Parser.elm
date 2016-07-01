module TimeTravel.Internal.Parser.Parser exposing (..)

import String
import Combine exposing (..)
import Char
import Combine.Char exposing (char, satisfy, upper)
import Combine.Num exposing (int, float)

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
    function `or`
    floatLiteral `or`
    intLiteral `or`
    stringLiteral
  )


-- stringLiteral : Parser AST
-- stringLiteral =
--   map StringLiteral <|
--   (\_ s _ -> s)
--   `map` char '"'
--   `andMap` stringChars
--   `andMap` char '"'


stringLiteral : Parser AST
stringLiteral =
  map StringLiteral <|
    (\_ s _ -> s)
    `map` char '"'
    `andMap` regex "(\\\\\"|[^\"])*"
    `andMap` char '"'


intLiteral : Parser AST
intLiteral =
  map (Value << toString) int

floatLiteral : Parser AST
floatLiteral =
  map (Value << toString) float


function : Parser AST
function =
  (\_ name _ -> Value name)
  `map` string "<function"
  `andMap` manyChars (satisfy ((/=) '>'))
  `andMap` char '>'


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
  (\h t -> String.fromList (h :: t))
  `map` upper
  `andMap` many (satisfy (\c -> Char.isUpper c || Char.isLower c || Char.isDigit c || c == '_' || c == '.')) -- assume Dict.fromList


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
  rec (\_ ->
  someChars (satisfy (\c -> not (isSpace c) && c /= '='))
  )

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
