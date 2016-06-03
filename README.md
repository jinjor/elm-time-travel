# elm-time-travel

Experimental time travel debugger for Elm 0.17. See [DEMO](http://jinjor.github.io/elm-time-travel/)

## How to use

```elm
main =
  Html.program <| TimeTravel.watch
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }
```
