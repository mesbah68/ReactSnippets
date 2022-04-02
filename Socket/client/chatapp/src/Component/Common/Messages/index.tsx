import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";

import Message from "../Message";
import NewMessageForm from "../NewMessageForm";

import { StyledMessagesWrapper, StyledMessageItem, StyledMessageContent } from "./style";
import {
  MessageSelectors,
  useMessageActions,
  ChatSelectors,
} from "../../../@redux";

interface Props {
  socket: Socket;
}

const Messages = ({ socket }: Props) => {
  const messages = useSelector(MessageSelectors.getMessagesList);
  const { setMessages } = useMessageActions();
  const messageRef = useRef(null);

  const activeChat = useSelector(ChatSelectors.getActiveChat);

  useEffect(() => {
    const listener = (message: any) => {
      setMessages(message);
    };
    socket.on("sendMessage", listener);

    return () => {
      socket.off("sendMessage", listener);
    };
  }, [socket]);

  const filteredMessages = messages.filter((msg: { to: string; }) => msg.to === activeChat.name);

  return (
    <StyledMessagesWrapper>
      <StyledMessageContent ref={messageRef}>
        {filteredMessages.length ?
            filteredMessages?.map((message: any, index: number) => (
            <StyledMessageItem>
              <Message key={index} messageItems={message} socket={socket} />
            </StyledMessageItem>
        )) : null }
      </StyledMessageContent>
      <NewMessageForm socket={socket} />
    </StyledMessagesWrapper>
  );
};

export default Messages;
