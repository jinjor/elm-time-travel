module TimeTravel exposing (beginnerProgram, program) -- where

import TimeTravel.Model exposing (..)
import TimeTravel.View as View
import TimeTravel.Util exposing (..)

import Html exposing (Html, div)
import Html.App

type alias BeginnerOptions model msg =
  { model : model
  , view : model -> Html msg
  , update : msg -> model -> model
  }

type alias Options model msg =
  { init : (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }

beginnerProgram : BeginnerOptions model msg -> Program Never
beginnerProgram { model, view, update } =
  Html.App.program <| wrap
    { init = (model, Cmd.none)
    , view = view
    , update = \msg model -> (update msg model, Cmd.none)
    , subscriptions = always Sub.none
    }

program : Options model msg -> Program Never
program =
  Html.App.program << wrap

wrap : Options model msg -> Options (Model model msg) msg
wrap { init, view, update, subscriptions } =
  let
    init' = (Nel (Nothing, fst init) [], snd init)
    update' msg (Nel current past) =
      let
        (_, m) = current
        (newModel, cmd) = update msg m
      in
        (Nel (Just msg, newModel) (current :: past)) ! [ cmd ]
    view' ((Nel (_, m) _) as model) =
      View.view model (view m)
    subscriptions' (Nel (_, m) _) =
      subscriptions m
  in
    { init = init'
    , update = update'
    , view = view'
    , subscriptions = subscriptions'
    }
