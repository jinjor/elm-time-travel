module TimeTravel.Internal.Parser.AST exposing (..) -- where

type AST
  = Record (List AST)
  | StringLiteral String
  | ListLiteral (List AST)
  | TupleLiteral (List AST)
  | Value String
  | Union String (List AST)
  | Property String AST
