# elm-time-travel

[![Build Status](https://travis-ci.org/jinjor/elm-time-travel.svg)](https://travis-ci.org/jinjor/elm-time-travel)

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

## Context: Is this "Time Travel"?

Maybe not. I borrowed this name from the original debugger, but currently the "Hot swap" feature is not implemented. After some [discussion](https://groups.google.com/forum/#!searchin/elm-discuss/debugger/elm-discuss/vtDxwvsL7DE/_G1jrjLUAQAJ), I found people think Time Travel debugger need to implement hot swap so that users can "change the future", which I personally don't need for now. I think hot swap can be implemented separately from this tool (e.g. [elm-hot-loader](https://github.com/fluxxu/elm-hot-loader)). So, the name will probably be changed in the future. Maybe "elm-dev-tool" or something.

BTW, The official Time Travel Debugger is [coming back soon](https://github.com/elm-lang/elm-reactor#note-about-time-travel)! Meanwhile, I'm trying to find out what the ideal debugger would be.


## TODO

Possible feature to be implemented in the future is:

* <strike>format model (e.g. indent, syntax highlight)</strike> done :)
* <strike>show diff between before and after msg</strike> done :)
* <strike>form a message tree where the root is user action and has chained messages</strike> done :)
* <strike>enable to show panel in other place (Currently it is fixed to right)</strike> done :)
* watch certain property (or filter part of model) and stop when it is changed
* show in Chrome DevTools
