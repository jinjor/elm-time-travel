module TimeTravel.Util exposing (Nel(..)) -- where

-- non-empty list
type Nel a =
  Nel a (List a)
