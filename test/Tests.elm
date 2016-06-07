module Tests exposing (..) -- where

import String
import TimeTravel.Internal.Parser as Parser
import ElmTest exposing (..)

tests : Test
tests =
  suite "A Test Suite"
    [ test "Addition" (assertEqual (3 + 7) 10)
    , test "String.left" (assertEqual "a" (String.left 1 "abcdefg"))
    , test "Parser succeeds" (assertEqual (Parser.parse "") (Ok 0))
    ]

main : Program Never
main =
  runSuite tests
