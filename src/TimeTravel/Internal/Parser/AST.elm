module TimeTravel.Internal.Parser.AST exposing (..) -- where

type AST
  = Record (List AST)
  | StringLiteral String
  | Value String
  | Union String (List AST)
  | Property String AST
  | UnparsedExpression String
