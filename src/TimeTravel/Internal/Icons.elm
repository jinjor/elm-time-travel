module TimeTravel.Internal.Icons exposing (..)

import Material.Icons.Content exposing (filter_list, content_copy, remove, add)
import Material.Icons.Navigation exposing (arrow_drop_down, arrow_drop_up)
import Material.Icons.Av exposing (play_arrow, pause)
import Material.Icons.Action exposing (swap_horiz)

import Svg exposing (Svg)
import Color

sync : Bool -> Svg msg
sync synchronized =
  (if synchronized then pause else play_arrow) Color.white 24


filter : Bool -> Svg msg
filter enabled =
  filter_list (if enabled then Color.white else Color.gray) 24


filterExpand : Bool -> Svg msg
filterExpand expanded =
  (if expanded then arrow_drop_up else arrow_drop_down) Color.white 24


layout : Svg msg
layout =
  swap_horiz Color.white 24


toggleModelDetail : Svg msg
toggleModelDetail =
  content_copy Color.white 24


minimize : Bool -> Svg msg
minimize minimized =
  (if minimized then add else remove) Color.white 24
