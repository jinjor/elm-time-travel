module TimeTravel.Navigation exposing (program) -- where

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


program : Parser data -> Options data model msg -> Program Never
program parser options =
  Navigation.program parser (wrap options)

-- programWithFlags
--     :  Parser data
--     -> Options flags data model msg
--     -> Program flags


wrap : Options data model msg -> Options data (Model model msg) (Msg msg)
wrap { init, view, update, subscriptions, urlUpdate } =
  let
    init' data =
      Model.init (fst init)
      ! [ Cmd.map UserMsg (snd init) ]
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
