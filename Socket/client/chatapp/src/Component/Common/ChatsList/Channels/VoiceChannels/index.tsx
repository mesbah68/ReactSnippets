import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Socket } from "socket.io-client";

import {
  ArrowDown2TwoToneIcon,
  ArrowUp2TwoToneIcon,
  VolumeUpCurvedIcon,
  // @ts-ignore
} from "@iconbox/iconly";


import { useActiveChatActions } from "../../../../../@redux";

import User from "../../../User";
import Group from "../../../Group";
import { UserItems } from "../../../../../Constant/GlobalType";

import {
  StyledVoiceChannelsWrapper,
  StyledUserItem,
  StyledHeaderWrapper,
} from "./style";

interface Props {
  socket: Socket;
  count?: string;
  voiceChannels?: any,
}

const VoiceChannels = ({ socket, voiceChannels }: Props) => {
  const [users, setUsers] = useState<UserItems[]>([]);
  const [toggleIcon, setToggleIcon] = useState(true);

  const { setActiveChat } = useActiveChatActions();

  const navigate = useNavigate();

  useEffect(() => {
    socket.on("users", (users: any) => {
      setUsers(users);
    });
  }, [socket]);

  const handleChangeIcon = (e: React.FormEvent) => {
    e.preventDefault();
    setToggleIcon(!toggleIcon);
  };

  const handleSetActiveGroup = (group: string, id: string) => {
    navigate(`/${group.replace(/\s/g, '')}`);
    setActiveChat({name: group, id: id});
  }

  const channelsList = voiceChannels.map((item: { name: string; icon: string; detail: string, id: string })  => (
      <Group onClick={() => handleSetActiveGroup(item.name, item.id)} title={item.name} icon={item.icon} detail={item.detail} />
  ))

  return (
    <StyledVoiceChannelsWrapper>
      <StyledHeaderWrapper onClick={handleChangeIcon}>
        <span>VOICE CHANNELS</span>
        {toggleIcon ? (
          <ArrowUp2TwoToneIcon onClick={handleChangeIcon} />
        ) : (
          <ArrowDown2TwoToneIcon onClick={handleChangeIcon} />
        )}
      </StyledHeaderWrapper>
      {toggleIcon &&
        users.map((user: any, index: number) => (
          <StyledUserItem key={index}>
            <User user={user} icon={<VolumeUpCurvedIcon size={2} />} />
          </StyledUserItem>
        ))}
      {toggleIcon && channelsList}
    </StyledVoiceChannelsWrapper>
  );
};

export default VoiceChannels;
