module TimeTravel.Internal.Parser exposing (..) -- where

import String
import Parser exposing (separatedBy, symbol, token, (*>), (<*), optional
  , Parser, or, satisfy, many, and, succeed, andThen, map, empty)
import Parser.Char exposing (braced)
-- import Parser.Number as PN

type AST
  = Record (List AST)
  | Value String
  | Property String AST

parse : String -> Result String AST
parse s = Parser.parse expression s

expression : Parser AST
expression =
  spaced record
  `or`
  spaced value


value : Parser AST
value =
  map (Value << String.trim) <|
    string (satisfy (\c -> c /= '=' && c /= '}' && c /= ','))


record : Parser AST
record =
  map Record <| braced properties


properties : Parser (List AST)
properties =
  spaced (separatedBy property comma)

property : Parser AST
property =
  (\_ key _ _ _ value _ -> Property key value)
  `map`
  spaces
  `and`
  propertyKey
  `and`
  spaces
  `and`
  equal
  `and`
  spaces
  `and`
  value
  `and`
  spaces


propertyKey : Parser String
propertyKey =
  string (satisfy (\c -> not (isSpace c) && c /= '='))


---


-- spaced : Parser a -> Parser a
-- spaced p =
--   spaces *> p <* spaces

spaced : Parser a -> Parser a
spaced p =
  (\_ v _ -> v)
  `map`
  spaces
  `and`
  p
  `and`
  spaces

spaces : Parser String
spaces = string space

space : Parser Char
space = satisfy isSpace

noSpace : Parser Char
noSpace = satisfy (not << isSpace)

isSpace : Char -> Bool
isSpace c =
  c == '\t' ||
  c == '\r' ||
  c == '\n' ||
  c == ' '

string : Parser Char -> Parser String
string char =
  Parser.map String.fromList (many char)

notEqual : Parser Char
notEqual = satisfy ((/=) '=')

comma : Parser Char
comma = symbol ','

equal : Parser Char
equal = symbol '='
