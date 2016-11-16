module TimeTravel.Html exposing
  ( beginnerProgram
  , program
  -- , programWithOptions
  , programWithFlags
  -- , programWithFlagsWithOptions
  -- , OutgoingMsg
  -- , IncomingMsg
  )


{-| Each functions in this module has the same interface as [Html.App](http://package.elm-lang.org/packages/elm-lang/html/latest/Html)

# Start your Program
@docs beginnerProgram, program, programWithFlags

-}


import TimeTravel.Internal.Model as Model exposing (..)
import TimeTravel.Internal.Update as Update
import TimeTravel.Internal.View as View
import TimeTravel.Internal.Util.Nel as Nel

import Html exposing (Html, div, text)


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


{-| See [Html.beginnerProgram](http://package.elm-lang.org/packages/elm-lang/html/latest/Html#beginnerProgram)
-}
beginnerProgram :
  { model : model
  , view : model -> Html msg
  , update : msg -> model -> model
  }
  -> Program Never (Model model msg) (Msg msg)
beginnerProgram { model, view, update } =
  programWithFlags
    { init = always (model, Cmd.none)
    , view = view
    , update = \msg model -> (update msg model, Cmd.none)
    , subscriptions = always Sub.none
    }


{-| See [Html.program](http://package.elm-lang.org/packages/elm-lang/html/latest/Html#program)
-}
program :
  { init : (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }
  -> Program Never (Model model msg) (Msg msg)
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
  -> Program Never (Model model msg) (Msg msg)
programWithOptions options { init, view, update, subscriptions } =
  programWithFlagsWithOptions options
    { init = always init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


{-| See [Html.programWithFlags](http://package.elm-lang.org/packages/elm-lang/html/latest/Html#programWithFlags)
-}
programWithFlags :
  { init : flags -> (model, Cmd msg)
  , view : model -> Html msg
  , update : msg -> model -> (model, Cmd msg)
  , subscriptions : model -> Sub msg
  }
  -> Program flags (Model model msg) (Msg msg)
programWithFlags stuff =
  programWithFlagsWithOptions
    { outgoingMsg = always Cmd.none
    , incomingMsg = always Sub.none
    }
    stuff


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
  -> Program flags (Model model msg) (Msg msg)
programWithFlagsWithOptions options stuff =
    Html.programWithFlags (wrap options stuff)


wrap :
  { outgoingMsg : OutgoingMsg -> Cmd Never
  , incomingMsg : (IncomingMsg -> (Msg msg)) -> Sub (Msg msg)
  }
  -> OptionsWithFlags flags model msg
  -> OptionsWithFlags flags (Model model msg) (Msg msg)
wrap { outgoingMsg, incomingMsg } { init, view, update, subscriptions } =
  let
    init_ flags =
      let
        (model, cmd) = init flags
      in
        Model.init model ! [ Cmd.map (\msg -> UserMsg (Just 0, msg)) cmd ]

    update_ msg model =
      case msg of
        UserMsg msgWithId ->
          let
            (m, c1) =
              updateOnIncomingUserMsg (\(id, msg) -> UserMsg (Just id, msg)) update msgWithId model

            (m_, c2) =
              Update.updateAfterUserMsg outgoingMsg m
          in
            m_ ! [ c1, Cmd.map DebuggerMsg c2 ]

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
        Sub.batch
          [ Sub.map (\c -> UserMsg (Nothing, c)) (subscriptions item.model)
          , incomingMsg (DebuggerMsg << Receive)
          ]

  in
    { init = init_
    , update = update_
    , view = view_
    , subscriptions = subscriptions_
    }
