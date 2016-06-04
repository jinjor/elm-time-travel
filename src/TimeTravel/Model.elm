module TimeTravel.Model exposing (Model, FilterOptions, Msg(..), init) -- where

import TimeTravel.Util exposing (..)

type alias Model model msg =
  { history : Nel (Maybe msg, model)
  , filter : FilterOptions
  , sync : Bool
  , expand : Bool
  }


type alias FilterOptions =
  List (String, Bool)


type Msg
  = ToggleSync
  | ToggleExpand
  | ToggleFilter String


init : model -> Model model msg
init model =
  { history = Nel (Nothing, model) []
  , filter = []
  , sync = True
  , expand = False
  }
