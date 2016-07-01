module TimeTravel.Internal.Util.Nel exposing (..)

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


filterMap : (a -> Maybe b) -> Nel a -> List b
filterMap match nel =
  List.filterMap match (toList nel)


find : (a -> Bool) -> Nel a -> Maybe a
find f nel =
  findHelp f (toList nel)


findHelp : (a -> Bool) -> List a -> Maybe a
findHelp f list =
  case list of
    [] ->
      Nothing
    head :: tail ->
      if f head then Just head else findHelp f tail


findMap : (a -> Maybe b) -> Nel a -> Maybe b
findMap f nel =
  findMapHelp f (toList nel)


findMapHelp : (a -> Maybe b) -> List a -> Maybe b
findMapHelp f list =
  case list of
    [] ->
      Nothing
    head :: tail ->
      case f head of
        Nothing -> findMapHelp f tail
        x -> x


findMapMany : Int -> (a -> Maybe b) -> Nel a -> List b
findMapMany n f nel =
  List.reverse (findMapManyHelp [] n f (toList nel))


findMapManyHelp : List b -> Int -> (a -> Maybe b) -> List a -> List b
findMapManyHelp result n f list =
  if n <= 0 then
    result
  else
    case list of
      [] -> result
      h :: t ->
        case f h of
          Just b ->
            findMapManyHelp (b :: result) (n - 1) f t
          Nothing ->
            findMapManyHelp result n f t


take : Int -> Nel a -> List a
take n nel =
  List.reverse (takeHelp [] n (toList nel))


takeHelp : List a -> Int -> List a -> List a
takeHelp result n list =
  if n <= 0 then
    result
  else
    case list of
      [] -> result
      h :: t ->
        takeHelp (h :: result) (n - 1) t


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
