import Html exposing (..)
import Html.Events exposing (..)
import Navigation
import String

import TimeTravel.Navigation as TimeTravel


main =
  TimeTravel.program urlParser
    { init = init
    , view = view
    , update = update
    , urlUpdate = urlUpdate
    , subscriptions = subscriptions
    }



-- URL PARSERS


toUrl : Int -> String
toUrl count =
  "#/" ++ toString count


fromUrl : String -> Result String Int
fromUrl url =
  String.toInt (String.dropLeft 2 url)


urlParser : Navigation.Parser (Result String Int)
urlParser =
  Navigation.makeParser (fromUrl << .hash)



-- MODEL


type alias Model = Int


init : Result String Int -> (Model, Cmd Msg)
init result =
  urlUpdate result 0



-- UPDATE


type Msg = Increment | Decrement


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  let
    newModel =
      case msg of
        Increment ->
          model + 1

        Decrement ->
          model - 1
  in
    (newModel, Navigation.newUrl (toUrl newModel))


urlUpdate : Result String Int -> Model -> (Model, Cmd Msg)
urlUpdate result model =
  case result of
    Ok newCount ->
      (newCount, Cmd.none)

    Err _ ->
      (model, Navigation.modifyUrl (toUrl model))



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none



-- VIEW


view : Model -> Html Msg
view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (toString model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
