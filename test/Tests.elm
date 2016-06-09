module Tests exposing (..) -- where

import String
import Parser as RawParser exposing (..)
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
testParseStringLiteral s ast = assertEqual (Ok ast) (RawParser.parse Parser.stringLiteral s)

testParseExpression : String -> AST -> Assertion
testParseExpression s ast = assertEqual (Ok ast) (RawParser.parse Parser.expression s)

testParseUnion : String -> AST -> Assertion
testParseUnion s ast = assertEqual (Ok ast) (RawParser.parse Parser.union s)

testParseRecord : String -> AST -> Assertion
testParseRecord s ast = assertEqual (Ok ast) (RawParser.parse Parser.record s)

testParseList : String -> AST -> Assertion
testParseList s ast = assertEqual (Ok ast) (RawParser.parse Parser.listLiteral s)

testParseTuple : String -> AST -> Assertion
testParseTuple s ast = assertEqual (Ok ast) (RawParser.parse Parser.tupleLiteral s)

testParseProperty : String -> AST -> Assertion
testParseProperty s ast = assertEqual (Ok ast) (RawParser.parse Parser.property s)

testParseProperties : String -> List AST -> Assertion
testParseProperties s ast = assertEqual (Ok ast) (RawParser.parse Parser.properties s)

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
    , test "function" (testParseExpression "<function:foo>" (Value ":foo"))
    , test "stringLiteral" (testParseStringLiteral "\" str = { } \"" (StringLiteral " str = { } "))
    , test "union1" (testParseUnion "Tag" (Union "Tag" []))
    , test "union2" (testParseUnion "Tag 1" (Union "Tag" [Value "1"]))
    , test "union3" (testParseUnion "Tag  1  \"a\"" (Union "Tag" [Value "1", StringLiteral "a"]))
    , test "union4" (testParseUnion "Tag { a = Inner }" (Union "Tag" [Record [Property "a" (Union "Inner" [])]]))
    , test "property" (testParseProperty "a=1" (Property "a" (Value "1")))
    , test "property" (testParseProperty "a = 1" (Property "a" (Value "1")))
    , test "properties" (testParseProperties "a=1" [Property "a" (Value "1")])
    , test "properties" (testParseProperties "a=1,a=2" [Property "a" (Value "1"),Property "a" (Value "2")])
    , test "properties" (testParseProperties "a=1 , a=2" [Property "a" (Value "1"),Property "a" (Value "2")])
    , test "record1" (testParseRecord "{}" (Record []))
    , test "record2" (testParseRecord "{ }" (Record []))
    , test "record3" (testParseRecord "{a=1}" (Record [Property "a" (Value "1")]))
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
    , test "expression6" (testParse "{a=1}" (Record [Property "a" (Value "1")]))
    , test "expression7" (testParse "{ a = 1 }" (Record [Property "a" (Value "1")]))
    , test "expression8" (testParse "{a=1,a=1}" (Record [Property "a" (Value "1"), Property "a" (Value "1")]))
    , test "expression9" (testParse "{ a = 1 , a = 1 }" (Record [Property "a" (Value "1"), Property "a" (Value "1")]))
    , test "expression10" (testParse "\" = {} \"" (StringLiteral " = {} "))
    , test "expression11" (testParse "{ a = { b = 1 } }" (Record [Property "a" (Record [Property "b" (Value "1")])]))
    , test "expression12" (testParse "{ a = \"}={\" }" (Record [Property "a" (StringLiteral "}={")]))
    , test "complex1" (testParseComplex "{ seed = Seed (Seed (Seed {})) }")
    , test "complex2" (testParseComplex complexString)
    ]

complexString = """
{ seed =
    Seed
      (Seed
        (Seed
          { state = State 20418 1
          , next = <function:_elm_lang$core$Random$next>
          , split = <function:_elm_lang$core$Random$split>
          , range = <function:_elm_lang$core$Random$range>
          }
        )
        (Seed
          { state = State 52770 1
          , next = <function:_elm_lang$core$Random$next>
          , split = <function:_elm_lang$core$Random$split>
          , range = <function:_elm_lang$core$Random$range>
          }
        )
      )
, visitDate = {}
, user = Guest
, pos = (8,79)
, draggingContext = None
, selectedEquipments = []
, copiedEquipments = []
, equipmentNameInput = { editingEquipment = Nothing }
, gridSize = 8
, selectorRect = Nothing
, keys = { ctrl = False, shift = False }
, editMode = Viewing
, colorPalette = []
, contextMenu = NoContextMenu
, floorsInfo = []
, floor =
    { cursor = 0
    , original =
        { id = Nothing
        , name = "1F"
        , equipments = []
        , width = 800
        , height = 600
        , realSize = Nothing
        , imageSource = None
        , $public = False
        , update = Nothing
        }
    , commits = []
    , update = <function>
    , cursorDataCache =
        { id = Nothing
        , name = "1F"
        , equipments = []
        , width = 800
        , height = 600
        , realSize = Nothing
        , imageSource = None
        , $public = False
        , update = Nothing
        }
    }
, windowSize = (1105,859)
, scale = { scaleDown = 0 }
, offset = (35,35)
, scaling = False
, prototypes = { data = [], selected = 0 }
, error = NoError
, floorProperty =
    { nameInput = "1F"
    , realWidthInput = "0"
    , realHeightInput = "0"
    }
, selectedResult = Nothing
, personInfo = Dict.fromList []
, diff = Nothing
, candidates = []
, url =
    { floorId = ""
    , query = Nothing
    , personId = Nothing
    , editMode = False
    }
, searchBox = { query = "", results = Nothing }
, tab = SearchTab
, listTest1 = [100000,100000,100000,100000,100000]
, tupleTest1 = (100000,100000,100000,100000,100000)
, listTest2 = [100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]
, tupleTest2 = (100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000)
}
"""


main : Program Never
main =
  -- let
  --   _ = Debug.log (
  --     case Parser.parse complexString of
  --       Ok ast -> Formatter.formatAsString ast
  --       Err s -> s
  --   ) ""
  -- in
    runSuite tests
