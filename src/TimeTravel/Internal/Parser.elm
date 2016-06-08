module TimeTravel.Internal.Parser exposing (..) -- where

import Parser exposing (separatedBy, symbol, token, Parser)
import Parser.Char as PC
import Parser.Number as PN

parse : String -> Result String AST
parse s = Parser.parse expression s

expression : Parser AST
expression =
  Parser.map Value (token "1")



type AST
  = Record (List AST)
  | Value String
