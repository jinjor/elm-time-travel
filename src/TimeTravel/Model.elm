module TimeTravel.Model exposing (Model, FilterOptions) -- where

import TimeTravel.Util exposing (..)

type alias Model model msg =
  Nel (Maybe msg, model)

type alias FilterOptions =
  List (String, Bool)
