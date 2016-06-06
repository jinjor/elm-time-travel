module TimeTravel.Navigation exposing (program, programWithFlags) -- where

import TimeTravel.Model as Model exposing (..)
import TimeTravel.Update as Update
import TimeTravel.View as View
import TimeTravel.Util exposing (..)

import Html exposing (Html, div, text)
import Navigation exposing (Parser)


type Msg msg
  = DebuggerMsg Model.Msg
  | UserMsg msg


type alias BeginnerOptions model msg =
  { model : model
  , view : model -> Html msg
  , update : msg -> model -> model
  }


type alias Options data model msg =
  { init : data -> (model, Cmd msg)
  , update : msg -> model -> (model, Cmd msg)
  , urlUpdate : data -> model -> (model, Cmd msg)
  , view : model -> Html msg
  , subscriptions : model -> Sub msg
  }


type alias OptionsWithFlags flags data model msg =
  { init : flags -> data -> (model, Cmd msg)
  , update : msg -> model -> (model, Cmd msg)
  , urlUpdate : data -> model -> (model, Cmd msg)
  , view : model -> Html msg
  , subscriptions : model -> Sub msg
  }


program : Parser data -> Options data model msg -> Program Never
program parser { init, view, update, subscriptions, urlUpdate } =
  programWithFlags parser
    { init = \flags data -> init data
    , view = view
    , update = update
    , subscriptions = subscriptions
    , urlUpdate = urlUpdate
    }

programWithFlags :
  Parser data
  -> OptionsWithFlags flags data model msg
  -> Program flags
programWithFlags parser options =
  Navigation.programWithFlags parser (wrap options)


wrap : OptionsWithFlags flags data model msg -> OptionsWithFlags flags data (Model model msg) (Msg msg)
wrap { init, view, update, subscriptions, urlUpdate } =
  let
    init' flags data =
      let
        (model, cmd) = init flags data
      in
        Model.init model ! [ Cmd.map UserMsg cmd ]
    update' msg model =
      case msg of
        UserMsg msg ->
          updateOnIncomingUserMsg UserMsg update msg model
        DebuggerMsg msg ->
          (Update.update msg model) ! []
    urlUpdate' data model =
      urlUpdateOnIncomingData UserMsg urlUpdate data model
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
    , urlUpdate = urlUpdate'
    }
