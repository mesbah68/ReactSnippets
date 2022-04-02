import React, { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

import ChatChannels from "./ChatChannels";
import VoiceChannels from "./VoiceChannels";

import { StyledChannelsWrapper, StyledHeaderWrapper } from "./style";

interface Props {
  socket: Socket;
  count: string;
  channels: any,
}

const Channels = ({ socket, count, channels }: Props) => {

  const[voiceChannels, setVoiceChannels] = useState([]);
  const[chatChannels, setChatChannels] = useState([]);

  useEffect(() => {
      if (channels) {
          const voiceChannelsList = channels.filter((channel: { type: string; }) => channel.type === "voice");
          const chatChannelsList = channels.filter((channel: { type: string; }) => channel.type === "chat");
          setChatChannels(chatChannelsList);
          setVoiceChannels(voiceChannelsList);
      }
  },[channels])

  return (
    <StyledChannelsWrapper>
      <StyledHeaderWrapper>
        <span>CHANNELS</span>
        <span>{count}</span>
      </StyledHeaderWrapper>
      <ChatChannels socket={socket} chatChannels={chatChannels} />
      <VoiceChannels socket={socket} voiceChannels={voiceChannels} />
    </StyledChannelsWrapper>
  );
};

export default Channels;
