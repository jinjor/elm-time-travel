module TimeTravel.Internal.Util exposing (..) -- where

-- non-empty list
type Nel a =
  Nel a (List a)

nelToList : Nel a -> List a
nelToList (Nel head tail) =
  head :: tail

nelMap : (a -> b) -> Nel a -> Nel b
nelMap f (Nel head tail) =
  Nel (f head) (List.map f tail)

nelFilter : (a -> Bool) -> Nel a -> List a
nelFilter match nel =
  List.filter match (nelToList nel)

nelHead : Nel a -> a
nelHead (Nel head tail) =
  head
