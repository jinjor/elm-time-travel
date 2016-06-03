module TimeTravel.Model exposing (Model) -- where

import TimeTravel.Util exposing (..)

type alias Model model msg
  = Nel (Maybe msg, model)
