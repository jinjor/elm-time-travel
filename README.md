# elm-time-travel

An experimental time travel debugger for Elm 0.17 (or above). See [DEMO](http://jinjor.github.io/elm-time-travel/)

## How to use

Just use `TimeTravel.program` instead of `Html.program`.

```elm
-- import Html.App as Html
import TimeTravel.Html.App as TimeTravel

main =
  -- Html.program
  TimeTravel.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }
```

That's it!
