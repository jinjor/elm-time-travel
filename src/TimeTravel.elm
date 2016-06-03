module TimeTravel exposing (watch) -- where

import TimeTravel.Model exposing (..)
import TimeTravel.View as View
import TimeTravel.Util exposing (..)

import Html exposing (Html, div)

watch :
  { init : (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  } ->
  { init : (Model model msg, Cmd msg)
  , view : Model model msg -> Html msg
  , update : msg -> Model model msg -> (Model model msg, Cmd msg)
  , subscriptions : Model model msg -> Sub msg
  }
watch { init, view, update, subscriptions } =
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
