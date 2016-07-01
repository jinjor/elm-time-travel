module TimeTravel.Internal.Parser.Util exposing (..)

import String
import Combine exposing (..)
import Combine.Char exposing (char, satisfy)
-- import Parser.Number as PN

-- spaced : Parser a -> Parser a
-- spaced p =
--   spaces *> p <* spaces

spaced : Parser a -> Parser a
spaced p =
  (\_ v _ -> v)
  `map` spaces
  `andMap` p
  `andMap` spaces

spaces : Parser String
spaces = manyChars space

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

someChars : Parser Char -> Parser String
someChars char =
  Combine.map String.fromList (many1 char)

manyChars : Parser Char -> Parser String
manyChars char =
  Combine.map String.fromList (many char)

notEqual : Parser Char
notEqual = satisfy ((/=) '=')

stringChars : Parser String
stringChars =
  manyChars (satisfy ((/=) '"'))

comma : Parser Char
comma = char ','

equal : Parser Char
equal = char '='
