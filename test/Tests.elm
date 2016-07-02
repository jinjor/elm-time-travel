module Tests exposing (..)

import String
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


testParse : String -> AST -> Assertion
testParse s ast = assertEqual (Ok ast) (Parser.parse s)

testParseStringLiteral : String -> AST -> Assertion
testParseStringLiteral s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.stringLiteral s)

testParseExpression : String -> AST -> Assertion
testParseExpression s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.expression s)

testParseUnion : String -> AST -> Assertion
testParseUnion s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.union s)

testParseRecord : String -> AST -> Assertion
testParseRecord s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.record s)

testParseList : String -> AST -> Assertion
testParseList s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.listLiteral s)

testParseTuple : String -> AST -> Assertion
testParseTuple s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.tupleLiteral s)

testParseProperty : String -> AST -> Assertion
testParseProperty s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.property s)

testParseProperties : String -> List AST -> Assertion
testParseProperties s ast = assertEqual (Ok ast) (fst <| RawParser.parse Parser.properties s)

testParseComplex : String -> Assertion
testParseComplex s =
  assert (
    isOk <|
    -- Debug.log "result" <|
    (Parser.parse s)
  )


tests : Test
tests =
  suite "A Test Suite"
    [ test "number1" (testParseExpression "1" (Value "1"))
    , test "number2" (testParseExpression "1.2" (Value "1.2"))
    , test "number3" (testParseExpression "-1" (Value "-1"))
    , test "number4" (testParseExpression "-1.2" (Value "-1.2"))
    , test "struct1" (testParseExpression "<function:foo>" (Value "<function:foo>"))
    , test "struct2" (testParseExpression "<websocket>" (Value "<websocket>"))
    , test "struct3" (testParseExpression "<process>" (Value "<process>"))
    , test "null" (testParseExpression "null" (Value "null"))
    , test "stringLiteral1" (testParseStringLiteral (toString """f"oo""") (StringLiteral "f\\\"oo"))
    , test "stringLiteral2" (testParseStringLiteral (toString """f"o"o""") (StringLiteral "f\\\"o\\\"o"))
    , test "stringLiteral3" (testParseStringLiteral (toString """f"o"o"o"o"o"o"o"o"o""") (StringLiteral "f\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o\\\"o"))
    , test "stringLiteral4" (testParseStringLiteral "\" str = { } \"" (StringLiteral " str = { } "))
    , test "union1" (testParseUnion "Tag" (Union "Tag" []))
    , test "union2" (testParseUnion "Tag 1" (Union "Tag" [Value "1"]))
    , test "union3" (testParseUnion "Tag  1  \"a\"" (Union "Tag" [Value "1", StringLiteral "a"]))
    , test "union4" (testParseUnion "Tag { a = Inner }" (Union "Tag" [Record [Property "a" (Union "Inner" [])]]))
    , test "union5" (testParseUnion "Tag Nothing" (Union "Tag" [Union "Nothing" []]))
    , test "union6" (testParseUnion "Tag Nothing Nothing" (Union "Tag" [Union "Nothing" [], Union "Nothing" []]))
    , test "union7" (testParseUnion "CamelCase" (Union "CamelCase" []))
    , test "union8" (testParseUnion "Camel_Snake" (Union "Camel_Snake" []))
    , test "union9" (testParseUnion "True" (Union "True" []))
    , test "union10" (testParseUnion "True1" (Union "True1" []))
    , test "union11" (testParseUnion "Just 1" (Union "Just" [Value "1"]))
    , test "union12" (testParseUnion "Just1 1" (Union "Just1" [Value "1"]))
    , test "union13" (testParseUnion "True 1" (Union "True" [Value "1"]))
    , test "property" (testParseProperty "a = 1" (Property "a" (Value "1")))
    , test "properties" (testParseProperties "a = 1,a = 2" [Property "a" (Value "1"),Property "a" (Value "2")])
    , test "record1" (testParseRecord "{}" (Record []))
    , test "record2" (testParseRecord "{ }" (Record []))
    , test "record3" (testParseRecord "{a = 1}" (Record [Property "a" (Value "1")]))
    , test "record4" (testParseRecord "{a_b = 1}" (Record [Property "a_b" (Value "1")]))
    , test "list1" (testParseList "[]" (ListLiteral []))
    , test "list2" (testParseList "[ ]" (ListLiteral []))
    , test "list3" (testParseList "[1,2]" (ListLiteral [Value "1", Value "2"]))
    , test "list4" (testParseList "[ \"1\" , \"2\" ]" (ListLiteral [StringLiteral "1", StringLiteral "2"]))
    , test "list5" (testParseList "[ [[ []] ] ]" (ListLiteral [ListLiteral [ListLiteral [ListLiteral []]]]))
    , test "list6" (testParseList "[\",\"]" (ListLiteral [StringLiteral ","]))
    , test "list7" (testParseList "[\"][\"]" (ListLiteral [StringLiteral "]["]))
    , test "tuple1" (testParseTuple "()" (TupleLiteral []))
    , test "tuple2" (testParseTuple "( )" (TupleLiteral []))
    , test "tuple3" (testParseTuple "(1,\"2\")" (TupleLiteral [Value "1", StringLiteral "2"]))
    , test "tuple4" (testParseTuple "( [] , [] )" (TupleLiteral [ListLiteral [], ListLiteral []]))
    , test "tuple5" (testParseTuple "( (( (1,2)) ) )" (TupleLiteral [TupleLiteral [TupleLiteral [TupleLiteral [Value "1", Value "2"]]]]))
    , test "tuple6" (testParseTuple "(\",\")" (TupleLiteral [StringLiteral ","]))
    , test "tuple7" (testParseTuple "(\")(\")" (TupleLiteral [StringLiteral ")("]))
    , test "tuple8" (testParseTuple "( Tag 1 \"a\", { a = 1 } )" (TupleLiteral [Union "Tag" [Value "1", StringLiteral "a"], Record [Property "a" (Value "1")]]))
    , test "expression1" (testParse "1" (Value "1"))
    , test "expression2" (testParse " 1 " (Value "1"))
    , test "expression3" (testParse "{}" (Record []))
    , test "expression4" (testParse " {} " (Record []))
    , test "expression5" (testParse "{ }" (Record []))
    , test "expression7" (testParse "{ a = 1 }" (Record [Property "a" (Value "1")]))
    , test "expression9" (testParse "{ a = 1, a = 1 }" (Record [Property "a" (Value "1"), Property "a" (Value "1")]))
    , test "expression10" (testParse "\" = {} \"" (StringLiteral " = {} "))
    , test "expression11" (testParse "{ a = { b = 1 } }" (Record [Property "a" (Record [Property "b" (Value "1")])]))
    , test "expression12" (testParse "{ a = \"}={\" }" (Record [Property "a" (StringLiteral "}={")]))
    , test "complex1" (testParseComplex "{ seed = Seed (Seed (Seed {})) }")
    , test "complex2" (testParseComplex (String.join " " <| String.lines complexString))
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

main : Program Never
main =
  runSuite tests
