module TimeTravel.Html.App exposing
  ( beginnerProgram
  , program
  -- , programWithOptions
  , programWithFlags
  -- , programWithFlagsWithOptions
  -- , OutgoingMsg
  -- , IncomingMsg
  ) -- where


{-| Each functions in this module has the same interface as [Html.App](http://package.elm-lang.org/packages/elm-lang/html/1.0.0/Html-App)

# Start your Program
@docs beginnerProgram, program, programWithFlags

-}


import TimeTravel.Internal.Model as Model exposing (..)
import TimeTravel.Internal.Update as Update
import TimeTravel.Internal.View as View
import TimeTravel.Internal.Util.Nel as Nel

import Html exposing (Html, div, text)
import Html.App as App

import String


type Msg msg
  = DebuggerMsg Model.Msg
  | UserMsg (Maybe Int, msg)


{- Alias for internal use -}
type alias OptionsWithFlags flags model msg =
  { init : flags -> (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }

type alias OutgoingMsg = Model.OutgoingMsg
type alias IncomingMsg = Model.IncomingMsg


{-| See [Html.App.beginnerProgram](http://package.elm-lang.org/packages/elm-lang/html/1.0.0/Html-App#beginnerProgram)
-}
beginnerProgram :
  { model : model
  , view : model -> Html msg
  , update : msg -> model -> model
  }
  -> Program Never
beginnerProgram { model, view, update } =
  programWithFlags
    { init = always (model, Cmd.none)
    , view = view
    , update = \msg model -> (update msg model, Cmd.none)
    , subscriptions = always Sub.none
    }


{-| See [Html.App.program](http://package.elm-lang.org/packages/elm-lang/html/1.0.0/Html-App#program)
-}
program :
  { init : (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }
  -> Program Never
program { init, view, update, subscriptions } =
  programWithFlags
    { init = always init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


programWithOptions :
  { outgoingMsg : OutgoingMsg -> Cmd Never
  , incomingMsg : (IncomingMsg -> (Msg msg)) -> Sub (Msg msg)
  }
  ->
  { init : (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }
  -> Program Never
programWithOptions options { init, view, update, subscriptions } =
  programWithFlagsWithOptions options
    { init = always init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


{-| See [Html.App.programWithFlags](http://package.elm-lang.org/packages/elm-lang/html/1.0.0/Html-App#programWithFlags)
-}
programWithFlags :
  { init : flags -> (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }
  -> Program flags
programWithFlags stuff =
  programWithFlagsWithOptions { outgoingMsg = always Cmd.none, incomingMsg = always Sub.none } stuff


programWithFlagsWithOptions :
  { outgoingMsg : OutgoingMsg -> Cmd Never
  , incomingMsg : (IncomingMsg -> (Msg msg)) -> Sub (Msg msg)
  }
  ->
    { init : flags -> (model, Cmd msg)
    , view : model -> Html msg
    , update : msg -> model -> (model, Cmd msg)
    , subscriptions : model -> Sub msg
    }
  -> Program flags
programWithFlagsWithOptions options stuff =
    App.programWithFlags (wrap options stuff)


wrap :
  { outgoingMsg : OutgoingMsg -> Cmd Never
  , incomingMsg : (IncomingMsg -> (Msg msg)) -> Sub (Msg msg)
  }
  -> OptionsWithFlags flags model msg
  -> OptionsWithFlags flags (Model model msg data) (Msg msg)
wrap { outgoingMsg, incomingMsg } { init, view, update, subscriptions } =
  let
    init' flags =
      let
        (model, cmd) = init flags
      in
        Model.init model ! [ Cmd.map (\msg -> UserMsg (Just 0, msg)) cmd ]
    update' msg model =
      case msg of
        UserMsg msgWithId ->
          let
            (m, c1) =
              updateOnIncomingUserMsg (\(id, msg) -> UserMsg (Just id, msg)) update msgWithId model
            (m', c2) =
              Update.updateAfterUserMsg outgoingMsg m
          in
            m' ! [ c1, Cmd.map DebuggerMsg c2 ]
        DebuggerMsg msg ->
          let
            (m, c) =
              Update.update outgoingMsg msg model
          in
            m ! [ Cmd.map DebuggerMsg c ]
    view' model =
      View.view (\c -> UserMsg (Nothing, c)) DebuggerMsg view model
    subscriptions' model =
      let
        item = Nel.head model.history
      in
        Sub.batch
          [ Sub.map (\c -> UserMsg (Nothing, c)) (subscriptions item.model)
          , incomingMsg (DebuggerMsg << Receive)
          ]

  in
    { init = init'
    , update = update'
    , view = view'
    , subscriptions = subscriptions'
    }
