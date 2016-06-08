module TimeTravel.Internal.Parser.AST exposing (..) -- where

type AST
  = Record (List AST)
  | StringLiteral String
  | Value String
  | Property String AST
  | UnparsedExpression String
