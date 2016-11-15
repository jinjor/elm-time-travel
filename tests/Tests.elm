module Tests exposing (..)

import Test exposing (..)
import Expect
import Fuzz exposing (list, int, tuple, string)

import Combine as RawParser exposing (..)
import TimeTravel.Internal.Parser.AST exposing(..)
import TimeTravel.Internal.Parser.Parser as Parser exposing(..)
import TimeTravel.Internal.Parser.Formatter as Formatter exposing(..)
import ElmTest exposing (..)

isOk : Result a b -> Bool
isOk r =
  case r of
    Ok _ -> True
    _ -> False


testParse : String -> AST -> Expectation
testParse s ast = Expect.equal (Ok ast) (Parser.parse s)

testParseStringLiteral : String -> AST -> Expectation
testParseStringLiteral s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.stringLiteral s)

testParseExpression : String -> AST -> Expectation
testParseExpression s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.expression s)

testParseUnion : String -> AST -> Expectation
testParseUnion s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.union s)

testParseRecord : String -> AST -> Expectation
testParseRecord s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.record s)

testParseList : String -> AST -> Expectation
testParseList s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.listLiteral s)

testParseTuple : String -> AST -> Expectation
testParseTuple s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.tupleLiteral s)

testParseProperty : String -> AST -> Expectation
testParseProperty s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.property s)

testParseProperties : String -> List AST -> Expectation
testParseProperties s ast = Expect.equal (Ok ast) (Tuple.first <| RawParser.parse Parser.properties s)

testParseComplex : String -> Expectation
testParseComplex s =
  Expect.true "" (
    isOk <|
    -- Debug.log "result" <|
    (Parser.parse s)
  )


all : Test
all =
  describe "A Test Suite"
    [ test "number1" (\_ -> testParseExpression "1" (Value "1"))
    , test "number2" (\_ -> testParseExpression "1.2" (Value "1.2"))
    , test "number3" (\_ -> testParseExpression "-1" (Value "-1"))
    , test "number4" (\_ -> testParseExpression "-1.2" (Value "-1.2"))
    , test "struct1" (\_ -> testParseExpression "<function:foo>" (Value "<function:foo>"))
    , test "struct2" (\_ -> testParseExpression "<websocket>" (Value "<websocket>"))
    , test "struct3" (\_ -> testParseExpression "<process>" (Value "<process>"))
    , test "null" (\_ -> testParseExpression "null" (Value "null"))
    , test "stringLiteral1" (\_ -> testParseStringLiteral (toString """f"oo""") (StringLiteral "f\\\"oo"))
    , test "stringLiteral2" (\_ -> testParseStringLiteral (toString """f"o"o""") (StringLiteral "f\\\"o\\\"o"))
    , test "stringLiteral3" (\_ -> testParseStringLiteral (toString """f"o"o"o"o"o"o"o"o"o""") (StringLiteral "f\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o"))
    , test "stringLiteral4" (\_ -> testParseStringLiteral "\" str = { } \"" (StringLiteral " str = { } "))
    , test "union1" (\_ -> testParseUnion "Tag" (Union "Tag" []))
    , test "union2" (\_ -> testParseUnion "Tag 1" (Union "Tag" [Value "1"]))
    , test "union3" (\_ -> testParseUnion "Tag  1  \"a\"" (Union "Tag" [Value "1", StringLiteral "a"]))
    , test "union4" (\_ -> testParseUnion "Tag { a = Inner }" (Union "Tag" [Record [Property "a" (Union "Inner" [])]]))
    , test "union5" (\_ -> testParseUnion "Tag Nothing" (Union "Tag" [Union "Nothing" []]))
    , test "union6" (\_ -> testParseUnion "Tag Nothing Nothing" (Union "Tag" [Union "Nothing" [], Union "Nothing" []]))
    , test "union7" (\_ -> testParseUnion "CamelCase" (Union "CamelCase" []))
    , test "union8" (\_ -> testParseUnion "Camel_Snake" (Union "Camel_Snake" []))
    , test "union9" (\_ -> testParseUnion "True" (Union "True" []))
    , test "union10" (\_ -> testParseUnion "True1" (Union "True1" []))
    , test "union11" (\_ -> testParseUnion "Just 1" (Union "Just" [Value "1"]))
    , test "union12" (\_ -> testParseUnion "Just1 1" (Union "Just1" [Value "1"]))
    , test "union13" (\_ -> testParseUnion "True 1" (Union "True" [Value "1"]))
    , test "property" (\_ -> testParseProperty "a = 1" (Property "a" (Value "1")))
    , test "properties" (\_ -> testParseProperties "a = 1,a = 2" [Property "a" (Value "1"),Property "a" (Value "2")])
    , test "record1" (\_ -> testParseRecord "{}" (Record []))
    , test "record2" (\_ -> testParseRecord "{ }" (Record []))
    , test "record3" (\_ -> testParseRecord "{a = 1}" (Record [Property "a" (Value "1")]))
    , test "record4" (\_ -> testParseRecord "{a_b = 1}" (Record [Property "a_b" (Value "1")]))
    , test "list1" (\_ -> testParseList "[]" (ListLiteral []))
    , test "list2" (\_ -> testParseList "[ ]" (ListLiteral []))
    , test "list3" (\_ -> testParseList "[1,2]" (ListLiteral [Value "1", Value "2"]))
    , test "list4" (\_ -> testParseList "[ \"1\" , \"2\" ]" (ListLiteral [StringLiteral "1", StringLiteral "2"]))
    , test "list5" (\_ -> testParseList "[ [[ []] ] ]" (ListLiteral [ListLiteral [ListLiteral [ListLiteral []]]]))
    , test "list6" (\_ -> testParseList "[\",\"]" (ListLiteral [StringLiteral ","]))
    , test "list7" (\_ -> testParseList "[\"][\"]" (ListLiteral [StringLiteral "]["]))
    , test "tuple1" (\_ -> testParseTuple "()" (TupleLiteral []))
    , test "tuple2" (\_ -> testParseTuple "( )" (TupleLiteral []))
    , test "tuple3" (\_ -> testParseTuple "(1,\"2\")" (TupleLiteral [Value "1", StringLiteral "2"]))
    , test "tuple4" (\_ -> testParseTuple "( [] , [] )" (TupleLiteral [ListLiteral [], ListLiteral []]))
    , test "tuple5" (\_ -> testParseTuple "( (( (1,2)) ) )" (TupleLiteral [TupleLiteral [TupleLiteral [TupleLiteral [Value "1", Value "2"]]]]))
    , test "tuple6" (\_ -> testParseTuple "(\",\")" (TupleLiteral [StringLiteral ","]))
    , test "tuple7" (\_ -> testParseTuple "(\")(\")" (TupleLiteral [StringLiteral ")("]))
    , test "tuple8" (\_ -> testParseTuple "( Tag 1 \"a\", { a = 1 } )" (TupleLiteral [Union "Tag" [Value "1", StringLiteral "a"], Record [Property "a" (Value "1")]]))
    , test "expression1" (\_ -> testParse "1" (Value "1"))
    , test "expression2" (\_ -> testParse " 1 " (Value "1"))
    , test "expression3" (\_ -> testParse "{}" (Record []))
    , test "expression4" (\_ -> testParse " {} " (Record []))
    , test "expression5" (\_ -> testParse "{ }" (Record []))
    , test "expression7" (\_ -> testParse "{ a = 1 }" (Record [Property "a" (Value "1")]))
    , test "expression9" (\_ -> testParse "{ a = 1, a = 1 }" (Record [Property "a" (Value "1"), Property "a" (Value "1")]))
    , test "expression10" (\_ -> testParse "\" = {} \"" (StringLiteral " = {} "))
    , test "expression11" (\_ -> testParse "{ a = { b = 1 } }" (Record [Property "a" (Record [Property "b" (Value "1")])]))
    , test "expression12" (\_ -> testParse "{ a = \"}={\" }" (Record [Property "a" (StringLiteral "}={")]))
    , test "complex1" (\_ -> testParseComplex "{ seed = Seed (Seed (Seed {})) }")
    , test "complex2" (\_ -> testParseComplex (String.join " " <| String.lines complexString))
    ]

complexString = """
{ int = 1
, float = 1.2
, string1 = "string"
, string2 = "a"
, function1 = <function>
, function2 = <function:_elm_lang$core$Random$range>
, $public = ""
, record1 = { query = "", results = Nothing }
, record2 =
    { multi = "line"
    , nest =
        { more = 1
        }
    }
, union1 = Single
, union2 = Union 100000 100000 100000 100000 100000 100000 100000 100000 100000 100000 100000 100000 100000
, union3 = Union (100000,100000,100000) { a = 100000, b = 100000, c = 100000 } [100000,100000,100000,100000,100000]
, union4 =
    Union
      "multi"
      "line"
      (Nest 1)
, list1 = [100000,100000,100000,100000,100000]
, list2 = [100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]
, list3 =
    [ "multi"
    , "line"
    , [ "nest"
      , "more"
      ]
    ]
, tuple1 = (100000,100000,100000,100000,100000)
, tuple2 = (100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000)
, tuple3 =
    ( "multi"
    , "line"
    , ( "nest"
      , "more"
      )
    )
}
"""
