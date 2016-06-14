module TimeTravel.Internal.MsgLike exposing (..) -- where


type MsgLike msg data
  = Message msg
  | UrlData data
  | Init


format : MsgLike msg data -> String
format msgLike =
  case msgLike of
    Message m -> toString m
    UrlData d -> "[Nav] " ++ toString d
    Init -> "[Init]"
