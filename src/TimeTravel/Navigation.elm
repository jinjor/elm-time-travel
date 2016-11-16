module TimeTravel.Navigation exposing (program, programWithFlags)

{-| Each functions in this module has the same interface as [Navigation](http://package.elm-lang.org/packages/elm-lang/navigation/latest/Navigation)

# Create a Program
@docs program, programWithFlags

-}

import TimeTravel.Internal.Model as Model exposing (..)
import TimeTravel.Internal.Update as Update
import TimeTravel.Internal.View as View
import TimeTravel.Internal.Util.Nel as Nel

import Html exposing (Html, div, text)
import Navigation exposing (Location)


type Msg msg
  = DebuggerMsg Model.Msg
  | UserMsg (Maybe Int, msg)


{- Alias for internal use -}
type alias OptionsWithFlags flags model msg =
  { init : flags -> Location -> (model, Cmd msg)
  , update : msg -> model -> (model, Cmd msg)
  , view : model -> Html msg
  , subscriptions : model -> Sub msg
  }


{-| See [Navigation.program](http://package.elm-lang.org/packages/elm-lang/navigation/latest/Navigation#program)
-}
program :
  (Location -> msg)
  -> { init : Location -> (model, Cmd msg)
     , update : msg -> model -> (model, Cmd msg)
     , view : model -> Html msg
     , subscriptions : model -> Sub msg
     }
  -> Program Never (Model model msg) (Msg msg)
program parser { init, view, update, subscriptions } =
  programWithFlags parser
    { init = \flags location -> init location
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


{-| See [Navigation.programWithFlags](http://package.elm-lang.org/packages/elm-lang/navigation/latest/Navigation#programWithFlags)
-}
programWithFlags :
  (Location -> msg)
  -> { init : flags -> Location -> (model, Cmd msg)
     , update : msg -> model -> (model, Cmd msg)
     , view : model -> Html msg
     , subscriptions : model -> Sub msg
     }
  -> Program flags (Model model msg) (Msg msg)
programWithFlags parser options =
  Navigation.programWithFlags (\location -> UserMsg (Nothing, parser location)) (wrap options)


wrap : OptionsWithFlags flags model msg -> OptionsWithFlags flags (Model model msg) (Msg msg)
wrap { init, view, update, subscriptions } =
  let
    -- TODO save settings and refactor
    outgoingMsg = always Cmd.none

    init_ flags location =
      let
        (model, cmd) = init flags location
      in
        Model.init model ! [ Cmd.map (\msg -> UserMsg (Just 0, msg)) cmd ]

    update_ msg model =
      case msg of
        UserMsg msgWithId ->
          updateOnIncomingUserMsg (\(id, msg) -> UserMsg (Just id, msg)) update msgWithId model

        DebuggerMsg msg ->
          let
            (m, c) =
              Update.update outgoingMsg msg model
          in
            m ! [ Cmd.map DebuggerMsg c ]

    view_ model =
      View.view (\c -> UserMsg (Nothing, c)) DebuggerMsg view model

    subscriptions_ model =
      let
        item = Nel.head model.history
      in
        Sub.map (\c -> UserMsg (Nothing, c)) (subscriptions item.model)
  in
    { init = init_
    , update = update_
    , view = view_
    , subscriptions = subscriptions_
    }
