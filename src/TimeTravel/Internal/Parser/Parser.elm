module TimeTravel.Internal.Parser.Parser exposing (..) -- where

import String
import Parser exposing (..)
import Char
import Parser.Char exposing (braced, upper)
-- import Parser.Number as PN

import TimeTravel.Internal.Parser.AST exposing (..)
import TimeTravel.Internal.Parser.Util exposing (..)


parse : String -> Result String AST
parse s = Parser.parse expression s


----

expression : Parser AST
expression =
  recursively (\_ ->
  spaced record
  -- `or` spaced union
  `or` spaced stringLiteral
  `or` spaced value
  )

stringLiteral : Parser AST
stringLiteral =
  map StringLiteral <|
  (\_ s _ -> s)
  `map` symbol '"'
  `and` stringChars
  `and` symbol '"'


union : Parser AST
union =
  recursively (\_ ->
  (\tag tail -> Union tag tail)
  `map` tag
  `and` many expression -- TODO this cause inifinite loop
  )


tag : Parser String
tag =
  (\h t -> String.fromList (h :: t))
  `map` upper
  `and` many (satisfy Char.isHexDigit)


value : Parser AST
value =
  map (Value << String.trim) <|
    string (satisfy (\c -> c /= '=' && c /= '}' && c /= ','))

stringChars : Parser String
stringChars =
  string (satisfy (\c -> c /= '"'))


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
  string (satisfy (\c -> not (isSpace c) && c /= '='))
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
