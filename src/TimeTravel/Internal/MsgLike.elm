module TimeTravel.Internal.MsgLike exposing (..)


type MsgLike msg
  = Message msg
  | Init


format : MsgLike msg -> String
format msgLike =
  case msgLike of
    Message m -> toString m
    Init -> "[Init]"
