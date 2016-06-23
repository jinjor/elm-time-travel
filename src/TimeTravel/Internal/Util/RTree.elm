module TimeTravel.Internal.Util.RTree exposing (..) -- where

type RTree a =
  Node a (List (RTree a))


singleton : a -> RTree a
singleton a =
  Node a []


root : RTree a -> a
root (Node a list) =
  a


addChild : a -> RTree a -> RTree a
addChild new (Node a list) =
  Node a (singleton new :: list)


addChildAt : (a -> Bool) -> a -> RTree a -> RTree a
addChildAt f new tree =
  let
    (Node a list) = tree
    (Node a' list') =
      if f a then
        addChild new tree
      else
        tree
  in
    Node a' (List.map (addChildAt f new) list')


sortEachBranchBy : (a -> comparable) -> RTree a -> RTree a
sortEachBranchBy f (Node a list) =
  Node a (List.sortBy (f << root) (List.map (sortEachBranchBy f) list))







--
