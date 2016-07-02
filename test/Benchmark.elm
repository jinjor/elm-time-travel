module Benchmark exposing (..)

import ElmTest exposing (..)
import String
import TimeTravel.Internal.Parser.AST exposing (..)
import TimeTravel.Internal.Parser.Formatter as Formatter exposing (..)
import TimeTravel.Internal.Parser.Parser as Parser exposing (..)

isOk : Result a b -> Bool
isOk r =
  case r of
    Ok _ -> True
    _ -> False


testParse : String -> AST -> Assertion
testParse s ast = assertEqual (Ok ast) (Parser.parse s)


parseAndFormatManyTimes : Int -> String -> Assertion
parseAndFormatManyTimes times s =
  let
    totalLength =
      List.foldl (\i memo ->
        case Parser.parse s of
          Ok ast ->
            let
              -- str = Formatter.formatAsString ast
              str = toString ast
            in
              memo + String.length str
          _ ->
            memo
      ) 0 [1..times]
  in
    assert (totalLength > 0)


tests : Test
tests =
  suite "A Test Suite"
    [ test "benchmark" (parseAndFormatManyTimes 1000 complexString)
    ]

complexString = String.join " " <| String.lines """
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
}
"""


main : Program Never
main =
  runSuite tests
