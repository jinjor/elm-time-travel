module TimeTravel.Html.App exposing (beginnerProgram, program, programWithFlags) -- where

{-| Each functions in this module has the same interface as [Html.App](http://package.elm-lang.org/packages/elm-lang/html/1.0.0/Html-App)

# Start your Program
@docs beginnerProgram, program, programWithFlags

-}


import TimeTravel.Internal.Model as Model exposing (..)
import TimeTravel.Internal.Update as Update
import TimeTravel.Internal.View as View
import TimeTravel.Internal.Util exposing (..)

import Html exposing (Html, div, text)
import Html.App as App

import String


type Msg msg
  = DebuggerMsg Model.Msg
  | UserMsg msg


{- Alias for internal use -}
type alias OptionsWithFlags flags model msg =
  { init : flags -> (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }
  

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


{-| See [Html.App.programWithFlags](http://package.elm-lang.org/packages/elm-lang/html/1.0.0/Html-App#programWithFlags)
-}
programWithFlags :
  { init : flags -> (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }
  -> Program flags
programWithFlags =
  App.programWithFlags << wrap


wrap : OptionsWithFlags flags model msg -> OptionsWithFlags flags (Model model msg) (Msg msg)
wrap { init, view, update, subscriptions } =
  let
    init' flags =
      let
        (model, cmd) = init flags
      in
        Model.init model ! [ Cmd.map UserMsg cmd ]
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
