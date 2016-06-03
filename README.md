# elm-time-travel

Experimental time travel debugger for Elm 0.17. See [DEMO](http://jinjor.github.io/elm-time-travel/)

## How to use

Just use `TimeTravel.program` instead of `Html.program`.

```elm
main =
  TimeTravel.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }
```

That's it!
