module TimeTravel.Internal.Parser.Util exposing (..) -- where

import String
import Parser exposing (..)
import Parser.Char exposing (braced)
-- import Parser.Number as PN

-- spaced : Parser a -> Parser a
-- spaced p =
--   spaces *> p <* spaces

spaced : Parser a -> Parser a
spaced p =
  (\_ v _ -> v)
  `map` spaces
  `and` p
  `and` spaces

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
