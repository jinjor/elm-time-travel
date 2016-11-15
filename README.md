# elm-time-travel

[![Build Status](https://travis-ci.org/jinjor/elm-time-travel.svg)](https://travis-ci.org/jinjor/elm-time-travel)

An experimental debugger for Elm >= 0.17. See [DEMO](http://jinjor.github.io/elm-time-travel/)

## How to use

Just use `TimeTravel.program` instead of `Html.program`.

```elm
import TimeTravel.Html as TimeTravel

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

## What is this library for?

Elm has [a great official debugger](http://elm-lang.org/blog/the-perfect-bug-report) from 0.18, but this debugger was born at 0.17! These two is focusing on slightly different things. The official one focuses on reproducing state and communicating between dev and QA people. This one, on the other hand, is more focusing on digging into problems that happen in runtime.

This library implements following features:

* Filtering Msgs
* Filtering Model
* Figure out how Msgs are chaining

And the ideas not implemented yet are:

* Watch partial Model and find Msgs that changes it
* Automatically save debugger state

So this library is a PoC of what the official debugger can potentially be in the future. Evan is also positive at this :)


## LICENSE

BSD3
