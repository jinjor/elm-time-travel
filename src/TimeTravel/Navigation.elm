module TimeTravel.Navigation exposing (program, programWithFlags) -- where

{-|

Each functions in this module has the same interface as [Navigation](http://package.elm-lang.org/packages/elm-lang/navigation/1.0.0/Navigation)

# Create a Program
@docs program, programWithFlags

-}

import TimeTravel.Internal.Model as Model exposing (..)
import TimeTravel.Internal.Update as Update
import TimeTravel.Internal.View as View
import TimeTravel.Internal.Util exposing (..)

import Html exposing (Html, div, text)
import Navigation exposing (Parser)


type Msg msg
  = DebuggerMsg Model.Msg
  | UserMsg msg


{- Alias for internal use -}
type alias OptionsWithFlags flags data model msg =
  { init : flags -> data -> (model, Cmd msg)
  , update : msg -> model -> (model, Cmd msg)
  , urlUpdate : data -> model -> (model, Cmd msg)
  , view : model -> Html msg
  , subscriptions : model -> Sub msg
  }


{-| See [Navigation.program](http://package.elm-lang.org/packages/elm-lang/navigation/1.0.0/Navigation#program)
-}
program :
  Parser data
  -> { init : data -> (model, Cmd msg)
     , update : msg -> model -> (model, Cmd msg)
     , urlUpdate : data -> model -> (model, Cmd msg)
     , view : model -> Html msg
     , subscriptions : model -> Sub msg
     }
  -> Program Never
program parser { init, view, update, subscriptions, urlUpdate } =
  programWithFlags parser
    { init = \flags data -> init data
    , view = view
    , update = update
    , subscriptions = subscriptions
    , urlUpdate = urlUpdate
    }


{-| See [Navigation.programWithFlags](http://package.elm-lang.org/packages/elm-lang/navigation/1.0.0/Navigation#programWithFlags)
-}
programWithFlags :
  Parser data
  -> { init : flags -> data -> (model, Cmd msg)
     , update : msg -> model -> (model, Cmd msg)
     , urlUpdate : data -> model -> (model, Cmd msg)
     , view : model -> Html msg
     , subscriptions : model -> Sub msg
     }
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
