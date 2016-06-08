module Tests exposing (..) -- where

import String
import Parser as RawParser exposing (..)
import TimeTravel.Internal.Parser.AST exposing(..)
import TimeTravel.Internal.Parser.Parser as Parser exposing(..)
import ElmTest exposing (..)


testParse : String -> AST -> Assertion
testParse s ast = assertEqual (Ok ast) (Parser.parse s)

testParseStringLiteral : String -> AST -> Assertion
testParseStringLiteral s ast = assertEqual (Ok ast) (RawParser.parse Parser.stringLiteral s)

testParseValue : String -> AST -> Assertion
testParseValue s ast = assertEqual (Ok ast) (RawParser.parse Parser.value s)

testParseRecord : String -> AST -> Assertion
testParseRecord s ast = assertEqual (Ok ast) (RawParser.parse Parser.record s)

testParseProperty : String -> AST -> Assertion
testParseProperty s ast = assertEqual (Ok ast) (RawParser.parse Parser.property s)

testParseProperties : String -> List AST -> Assertion
testParseProperties s ast = assertEqual (Ok ast) (RawParser.parse Parser.properties s)

tests : Test
tests =
  suite "A Test Suite"
    [ test "value" (testParseValue "1" (Value "1"))
    , test "value" (testParseValue "a" (Value "a"))
    , test "value" (testParseValue "A" (Value "A"))
    , test "value" (testParseValue "<function>" (Value "<function>"))
    , test "value" (testParseValue "Tag (Tag a [])" (Value "Tag (Tag a [])"))
    , test "stringLiteral" (testParseStringLiteral "\" str = { } \"" (StringLiteral " str = { } "))
    , test "property" (testParseProperty "a=1" (Property "a" (Value "1")))
    , test "property" (testParseProperty "a = 1" (Property "a" (Value "1")))
    , test "properties" (testParseProperties "a=1" [Property "a" (Value "1")])
    , test "properties" (testParseProperties "a=1,a=2" [Property "a" (Value "1"),Property "a" (Value "2")])
    , test "properties" (testParseProperties "a=1 , a=2" [Property "a" (Value "1"),Property "a" (Value "2")])
    , test "record1" (testParseRecord "{}" (Record []))
    , test "record2" (testParseRecord "{ }" (Record []))
    , test "record3" (testParseRecord "{a=1}" (Record [Property "a" (Value "1")]))
    , test "expression1" (testParse "1" (Value "1"))
    , test "expression2" (testParse " 1 " (Value "1"))
    , test "expression3" (testParse "{}" (Record []))
    , test "expression4" (testParse " {} " (Record []))
    , test "expression5" (testParse "{ }" (Record []))
    , test "expression6" (testParse "{a=1}" (Record [Property "a" (Value "1")]))
    , test "expression7" (testParse "{ a = 1 }" (Record [Property "a" (Value "1")]))
    , test "expression8" (testParse "{a=1,a=1}" (Record [Property "a" (Value "1"), Property "a" (Value "1")]))
    , test "expression9" (testParse "{ a = 1 , a = 1 }" (Record [Property "a" (Value "1"), Property "a" (Value "1")]))
    , test "expression10" (testParse "\" = {} \"" (StringLiteral " = {} "))
    , test "expression11" (testParse "{ a = { b = 1 } }" (Record [Property "a" (Record [Property "b" (Value "1")])]))
    , test "expression12" (testParse "{ a = \"}={\" }" (Record [Property "a" (StringLiteral "}={")]))
    ]

main : Program Never
main =
  runSuite tests
