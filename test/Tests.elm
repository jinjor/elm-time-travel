module Tests exposing (..) -- where

import String
import Parser as RawParser exposing (..)
import TimeTravel.Internal.Parser.AST exposing(..)
import TimeTravel.Internal.Parser.Parser as Parser exposing(..)
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

testParseProperty : String -> AST -> Assertion
testParseProperty s ast = assertEqual (Ok ast) (RawParser.parse Parser.property s)

testParseProperties : String -> List AST -> Assertion
testParseProperties s ast = assertEqual (Ok ast) (RawParser.parse Parser.properties s)

testParseComplex : String -> Assertion
testParseComplex s = assert (isOk <| Debug.log "result" <| (Parser.parse s))


tests : Test
tests =
  suite "A Test Suite"
    [ test "number1" (testParseExpression "1" (Value "1"))
    , test "number2" (testParseExpression "1.2" (Value "1.2"))
    , test "number3" (testParseExpression "-1" (Value "-1"))
    , test "number4" (testParseExpression "-1.2" (Value "-1.2"))
    -- MEMO: toString 1.0 == "1"
    , test "function" (testParseExpression "<function:foo>" (Value "foo"))
    , test "stringLiteral" (testParseStringLiteral "\" str = { } \"" (StringLiteral " str = { } "))
    , test "union1" (testParseUnion "Tag" (Union "Tag" []))
    , test "union2" (testParseUnion "Tag 1" (Union "Tag" [Value "1"]))
    , test "union3" (testParseUnion "Tag 1 2" (Union "Tag" [Value "1", Value "2"]))
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
    -- , test "complex" (testParseComplex complexString)
    -- , test "expression13" (testParse "{ seed = Seed (Seed (Seed {})) }" (Record [Property "seed" (Value "Seed (Seed (Seed {}))")]))
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
, showPrintView = False
}
"""


main : Program Never
main =
  runSuite tests
