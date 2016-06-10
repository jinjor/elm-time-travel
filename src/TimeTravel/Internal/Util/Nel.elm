module TimeTravel.Internal.Util.Nel exposing (..) -- where

-- non-empty list
type Nel a =
  Nel a (List a)


toList : Nel a -> List a
toList (Nel head tail) =
  head :: tail


map : (a -> b) -> Nel a -> Nel b
map f (Nel head tail) =
  Nel (f head) (List.map f tail)


filter : (a -> Bool) -> Nel a -> List a
filter match nel =
  List.filter match (toList nel)


head : Nel a -> a
head (Nel head tail) =
  head


concat : List a -> Nel a -> Nel a
concat list (Nel h t) =
  case list of
    head :: tail ->
      Nel head (tail ++ (h :: t))
    _ ->
      Nel h t


cons : a -> Nel a -> Nel a
cons new (Nel h t) =
  Nel new (h :: t)
