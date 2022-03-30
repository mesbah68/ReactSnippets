import React, { useEffect, useState } from "react";
// @ts-ignore
import { ArrowDown2TwoToneIcon, ArrowUp2TwoToneIcon } from "@iconbox/iconly";
// @ts-ignore
import { StarFillIcon } from "@iconbox/eva";
import { Socket } from "socket.io-client";

import Group from "../../../Group";

import { StyledChatChannelsWrapper, StyledHeaderWrapper } from "./style";

interface Props {
  socket: Socket;
  count?: string;
  chatChannels?: any,
}

type User = {
  id: string;
  name: string;
};

const ChatChannels = ({ socket, chatChannels }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [toggleIcon, setToggleIcon] = useState(true);

  useEffect(() => {
    const listener = (users: any) => {
      setUsers(users);
    };
    socket.on("users", listener);

    return () => {
      socket.off("users", listener);
    };
  }, [socket]);

  const handleChangeIcon = (e: React.FormEvent) => {
    e.preventDefault();
    setToggleIcon(!toggleIcon);
  };

  const channelsList = chatChannels.map((item: { name: string; icon: string; detail: string })  => (
      <Group title={item.name} icon={item.icon} detail={item.detail === "star" ? <StarFillIcon /> : item.detail} />
  ))

  return (
    <StyledChatChannelsWrapper>
      <StyledHeaderWrapper onClick={handleChangeIcon}>
        <span>CHAT CHANNELS</span>
        {toggleIcon ? (
          <ArrowUp2TwoToneIcon onClick={handleChangeIcon} />
        ) : (
          <ArrowDown2TwoToneIcon onClick={handleChangeIcon} />
        )}
      </StyledHeaderWrapper>
      {toggleIcon && channelsList}
    </StyledChatChannelsWrapper>
  );
};

export default ChatChannels;
