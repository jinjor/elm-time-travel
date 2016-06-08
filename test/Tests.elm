module Tests exposing (..) -- where

import String
import TimeTravel.Internal.Parser as Parser exposing(..)
import ElmTest exposing (..)


testParse : String -> AST -> Assertion
testParse s ast = assertEqual (Ok ast) (Parser.parse s)

tests : Test
tests =
  suite "A Test Suite"
    [ test "bracket" (testParse "1" (Value "1"))
    ]

main : Program Never
main =
  runSuite tests
