# elm-time-travel

A time travel debugger for Elm 0.17 (or above). See [DEMO](http://jinjor.github.io/elm-time-travel/)

## How to use

Just use `TimeTravel.program` instead of `App.program`.

```elm
-- import Html.App as App
import TimeTravel.Html.App as TimeTravel

main =
  -- App.program
  TimeTravel.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }
```

That's it!


## TODO

Possible feature to be implemented in the future is:

* <strike>format model (e.g. indent, syntax highlight)</strike> done :)
* <strike>show diff between before and after msg</strike> done :)
* watch certain property and stop when it is changed
* form a Cmd tree where the root is user action and has chained Cmds
* enable to show panel in other place (Currently it is fixed on the right)
