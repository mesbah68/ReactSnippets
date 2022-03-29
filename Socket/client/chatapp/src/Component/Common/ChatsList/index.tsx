import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import { Button, Typography, Avatar, Input } from "antd";

// @ts-ignore
import { DeleteLightIcon, EditSquareLightIcon } from "@iconbox/iconly";
// @ts-ignore
import { MenuIcon } from "@iconbox/jamicons";
// @ts-ignore
import { SearchOutlineIcon } from "@iconbox/eva";

import  logo  from "./../../../assets/images/kLogo.png";
import kumpulo from "../../../assets/images/kumpulo.png";

import {
  UserSelectors,
  useUserActions,
} from "../../../@redux";

import Channels from "./Channels";

import {
  StyledChatListWrapper,
  StyledAvatarWrapper,
  StyledSearchWrapper,
  StyledSystemWrapper,
  StyledIconWrapper,
} from "./style";

interface Props {
  socket: Socket;
  setVisibility: any;
}

const ChatsList = ({ socket, setVisibility }: Props) => {

  const [searchedItem, setSearchedItem] = useState("");

  const user = useSelector(UserSelectors.getUser);
  const { setUser } = useUserActions();

  const { Title, Text } = Typography;
  const CHANNELSCOUNT = "120";

  useEffect(() => {
    const listener = (user: any) => {
      setUser(user);
    };
    socket.on("users", listener);

    return () => {
      socket.off("users", listener);
    };
  }, [socket]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
        <StyledChatListWrapper>
          <Title level={4}>
            {user ? (
                <StyledIconWrapper>
                  <StyledAvatarWrapper>
                    <Avatar
                        src={logo}
                        size="large"
                    />
                    <img src={kumpulo} />
                  </StyledAvatarWrapper>
                  <MenuIcon size={2.5} onClick={() => setVisibility(false)} />
                </StyledIconWrapper>
            ) : (
                "Chat"
            )}
          </Title>
          <>
            <StyledSearchWrapper>
              <form onSubmit={handleSearch}>
                <Input placeholder="Search" value={searchedItem} onChange={(e) => setSearchedItem(e.target.value)} />
                <SearchOutlineIcon size={3} onClick={handleSearch} />
              </form>
            </StyledSearchWrapper>
            <Channels socket={socket} count={CHANNELSCOUNT} />
          </>
        </StyledChatListWrapper>
  );
};

export default ChatsList;
