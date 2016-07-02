module TimeTravel.Internal.Parser.Util exposing (..)

import Combine exposing (Parser, between, regex, string)

spaced : Parser a -> Parser a
spaced p =
  between spaces spaces p

spaces : Parser String
spaces = regex "[ \r\t\n]*"

comma : Parser String
comma = string ","

equal : Parser String
equal = string "="
