// ignore eslint
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import {Col, Drawer, Row} from "antd";

import { UserSelectors } from "../../../@redux";

// @ts-ignore
import { ArrowDown2TwoToneIcon, NotificationLightIcon } from "@iconbox/iconly";


import EnterChatForm from "../../Common/EnterChatForm";
import ChatsList from "../../Common/ChatsList";
import MessagesList from "../../Common/MessagesList";

import {
  StyledChatWrapper,
} from "./style";

interface Props {
  chatRoomTitle: string;
}

const ChatWrapper = ({ chatRoomTitle }: Props) => {
  const [socket, setSocket] = useState<Socket>();
  const [visible, setVisible] = useState(true);

  const user = useSelector(UserSelectors.getUser);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <Row className="ant-row ant-row-center">
      <Col span={24}>
        <StyledChatWrapper className="font-face-gb">
          {user.length!==0 && socket ? (
              <Row>
                <Col span={visible ? 6 : 0}>
                  <Drawer
                      placement="left"
                      width="25%"
                      mask={false}
                      visible={visible}
                      closable={false}
                      className="sidebar"
                      contentWrapperStyle={{boxShadow: "none"}}
                  >
                    <ChatsList socket={socket} setVisibility={setVisible} />
                  </Drawer>
                </Col>
                <Col span={visible ? 18 : 24}>
                  <MessagesList setSideBarVisibility={setVisible} sideBarVisibility={visible} chatRoomTitle={chatRoomTitle} socket={socket} />
                </Col>
              </Row>
          ) : (
              socket &&
              user?.length === 0 && (
                  <div>
                    <EnterChatForm socket={socket} />
                  </div>
              )
          )}
        </StyledChatWrapper>
      </Col>
    </Row>
  );
};

export default ChatWrapper;
