module TimeTravel exposing (beginnerProgram, program) -- where

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
          updateOnIncomingUserMsg update msg model
        DebuggerMsg msg ->
          (Update.update msg model) ! []
    view' model =
      view_ view model
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


updateOnIncomingUserMsg :
     (msg -> model -> (model, Cmd msg))
  -> msg
  -> Model model msg
  -> (Model model msg, Cmd (Msg msg))
updateOnIncomingUserMsg update msg model =
  let
    (Nel current past) = model.history
    (_, m) = current
    (newUserModel, userCmd) = update msg m
  in
    { model |
      filter = updateFilter msg model.filter
    , msgId = model.msgId + 1
    , history = Nel (Just (model.msgId, msg), newUserModel) (current :: past)
    } ! [ Cmd.map UserMsg userCmd ]


updateFilter : msg -> FilterOptions -> FilterOptions
updateFilter msg filterOptions =
  let
    str = toString msg
  in
    case String.words str of
      head :: _ ->
        let
          exists =
            List.any (\(name, _) -> name == head) filterOptions
        in
          if exists then
            filterOptions
          else
            (head, True) :: filterOptions
      _ ->
        filterOptions


view_ : (model -> Html msg) -> Model model msg -> Html (Msg msg)
view_ userView model =
  div
    []
    [ App.map UserMsg (userView_ userView model)
    , App.map DebuggerMsg (View.view model)
    ]


userView_ : (model -> Html msg) -> Model model msg -> Html msg
userView_ userView model =
  case selectedModel model of
    Just userModel ->
      userView userModel
    Nothing ->
      text "Error: Unable to render"
