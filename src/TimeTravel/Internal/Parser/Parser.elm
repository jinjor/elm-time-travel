module TimeTravel.Internal.Parser.Parser exposing (..)

import String
import Parser exposing (..)
import Char
import Parser.Char exposing (braced, upper, parenthesized, bracketed)
import Parser.Number exposing (integer, float)

import TimeTravel.Internal.Parser.AST exposing (..)
import TimeTravel.Internal.Parser.Util exposing (..)


parse : String -> Result String AST
parse s = Parser.parse (spaced expression) s


----

expression : Parser AST
expression =
  recursively (\_ ->
    union `or`
    expressionWithoutUnion
  )

expressionWithoutUnion : Parser AST
expressionWithoutUnion =
  recursively (\_ ->
    record `or`
    listLiteral `or`
    tupleLiteral `or`
    function `or`
    floatLiteral `or`
    intLiteral `or`
    stringLiteral
  )


stringLiteral : Parser AST
stringLiteral =
  map StringLiteral <|
  (\_ s _ -> s)
  `map` symbol '"'
  `and` stringChars
  `and` symbol '"'


intLiteral : Parser AST
intLiteral =
  map (Value << toString) integer

floatLiteral : Parser AST
floatLiteral =
  map (Value << toString) float


function : Parser AST
function =
  (\_ name _ -> Value name)
  `map` token "<function"
  `and` manyChars (satisfy (\c -> c /= '>'))
  `and` symbol '>'


tupleLiteral : Parser AST
tupleLiteral =
  recursively (\_ ->
  map TupleLiteral <| parenthesized items
  )


listLiteral : Parser AST
listLiteral =
  recursively (\_ ->
  map ListLiteral <| bracketed items
  )


items : Parser (List AST)
items =
  recursively (\_ ->
  spaced (separatedBy (spaced expression) comma)
  )


union : Parser AST
union =
  recursively (\_ ->
  (\tag tail -> Union tag tail)
  `map` tag
  `and` many unionParam
  )


singleUnion : Parser AST
singleUnion =
  recursively (\_ ->
    map (\tag -> Union tag []) tag
  )


unionParam : Parser AST
unionParam =
  recursively (\_ ->
  (\_ exp  -> exp)
  `map` spaces
  `and` (singleUnion `or` expressionWithoutUnion)
  )


tag : Parser String
tag =
  (\h t -> String.fromList (h :: t))
  `map` upper
  `and` many (satisfy (\c -> Char.isUpper c || Char.isLower c || Char.isDigit c || c == '.')) -- assume Dict.fromList


record : Parser AST
record =
  recursively (\_ ->
  map Record <| braced properties
  )

properties : Parser (List AST)
properties =
  recursively (\_ ->
  spaced (separatedBy property comma)
  )

propertyKey : Parser String
propertyKey =
  recursively (\_ ->
  someChars (satisfy (\c -> not (isSpace c) && c /= '='))
  )

property : Parser AST
property =
  recursively (\_ ->
  (\_ key _ _ _ value _ -> Property key value)
  `map` spaces
  `and` propertyKey
  `and` spaces
  `and` equal
  `and` spaces
  `and` expression
  `and` spaces
  )
