module TimeTravel.Html.App exposing (beginnerProgram, program) -- where

import TimeTravel.Model as Model exposing (..)
import TimeTravel.Update as Update
import TimeTravel.View as View
import TimeTravel.Util exposing (..)

import Html exposing (Html, div, text)
import Html.App as App

import String

type Msg msg
  = DebuggerMsg Model.Msg
  | UserMsg msg

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
  App.program <| wrap
    { init = (model, Cmd.none)
    , view = view
    , update = \msg model -> (update msg model, Cmd.none)
    , subscriptions = always Sub.none
    }


program : Options model msg -> Program Never
program =
  App.program << wrap


wrap : Options model msg -> Options (Model model msg) (Msg msg)
wrap { init, view, update, subscriptions } =
  let
    init' =
      Model.init (fst init)
      ! [ Cmd.map UserMsg (snd init) ]
    update' msg model =
      case msg of
        UserMsg msg ->
          updateOnIncomingUserMsg UserMsg update msg model
        DebuggerMsg msg ->
          (Update.update msg model) ! []
    view' model =
      View.view UserMsg DebuggerMsg view model
    subscriptions' model =
      let
        (Nel (_, m) _) = model.history
      in
        Sub.map UserMsg (subscriptions m)
  in
    { init = init'
    , update = update'
    , view = view'
    , subscriptions = subscriptions'
    }
