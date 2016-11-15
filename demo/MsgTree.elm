port module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http
import Json.Decode as Json
import Task

import TimeTravel.Html as TimeTravel

import Dict exposing (Dict)
import Process


-- port outgoing : TimeTravel.OutgoingMsg -> Cmd msg
--
-- port incoming : (TimeTravel.IncomingMsg -> msg) -> Sub msg


main =
  TimeTravel.program
  -- TimeTravel.programWithOptions
  --   { outgoingMsg = outgoing
  --   , incomingMsg = incoming
  --   }
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL


type alias Model =
  { user : Maybe String
  , team : Team
  , members : List String
  , memberDetails : Dict String Member
  , selectedMember : Maybe String
  , err : List String
  }


type alias Team =
  { id : String
  , name : String
  }


type alias Member =
  { id : String
  , name : String
  , tel : String
  , mail : String
  }


initMember : Member
initMember =
  { id = ""
  , name = ""
  , tel = ""
  , mail = ""
  }


initTeam : Team
initTeam =
  { id = ""
  , name = ""
  }


init : (Model, Cmd Msg)
init =
  ( { user = Nothing
    , team = initTeam
    , members = []
    , memberDetails = Dict.empty
    , selectedMember = Nothing
    , err = []
    }
  , Cmd.none
  )



-- UPDATE


type Msg
  = Load
  | UserLoaded String
  | TeamDetailLoaded Team
  | MembersLoaded (List String)
  | MemberDetailLoaded Member
  | Error String


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    Load ->
      ( { model | err = [] }, getUser)

    UserLoaded name ->
      ( { model | user = Just name }
      , Cmd.batch [getTeamDetail name, getTeamMembers name]
      )

    TeamDetailLoaded team ->
      ( { model | team = team }, Cmd.none )

    MembersLoaded members ->
      ( { model | members = members, selectedMember = List.head members }
      , Cmd.batch (List.map getMemberDetail members)
      )

    MemberDetailLoaded detail ->
      ( { model | memberDetails = Dict.insert detail.id detail model.memberDetails }
      , Cmd.none
      )

    Error e ->
      ({ model | err = e :: model.err }, Cmd.none)



-- VIEW


view : Model -> Html Msg
view model =
  div []
    [ greeting model
    , button [ onClick Load ] [ text "Load" ]
    , hr [] []
    , teamDetailView model
    , hr [] []
    , div [] (List.map memberItemView model.members)
    , hr [] []
    , memberDetailView model
    ]


greeting : Model -> Html Msg
greeting model =
  case model.user of
    Just name -> div [] [ text ("Hello, " ++ name) ]
    Nothing -> div [] [ text "" ]


teamDetailView : Model -> Html Msg
teamDetailView model =
  div [] [ text model.team.name ]


memberItemView : String -> Html Msg
memberItemView name =
  div [] [ text name ]


memberDetailView : Model -> Html Msg
memberDetailView model =
  case model.selectedMember of
    Just id ->
      case Dict.get id model.memberDetails of
        Just member ->
          div
            []
            [ div [] [ text member.name ]
            , div [] [ text member.tel ]
            , div [] [ text member.mail ]
            ]

        Nothing ->
          text ""

    Nothing ->
      text ""


-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none



-- HTTP

dummyHttp : Int -> Msg -> Cmd Msg
dummyHttp sleepTime msg =
  Task.perform
    (\_ -> msg)
    (Process.sleep (toFloat sleepTime))


getUser : Cmd Msg
getUser =
  dummyHttp 300 (UserLoaded "Elmo")


getTeamDetail : String -> Cmd Msg
getTeamDetail name =
  dummyHttp 100 (TeamDetailLoaded { id = "0", name = "Awesome Team" })


getTeamMembers : String -> Cmd Msg
getTeamMembers name =
  dummyHttp 50 (MembersLoaded ["Alice", "Bob", "Chuck"])


getMemberDetail : String -> Cmd Msg
getMemberDetail id =
  if id == "Alice" then
    dummyHttp 40 (MemberDetailLoaded { id = "Alice", name = "Alice", tel = "0156", mail = "alice@xxx.com" })
  else if id == "Bob" then
    dummyHttp 60 (MemberDetailLoaded { id = "Bob", name = "Bob", tel = "5136", mail = "bob@xxx.com" })
  else if id == "Chuck" then
    dummyHttp 70 (Error "Not Found")
  else
    Cmd.none
