import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { Socket } from "socket.io-client";

import { StyledChatFormWrapper } from "./style";
import { useUserActions } from "../../../@redux";

import loginChatLogo from "../../../assets/images/chatLogo.png";

interface Props {
  socket: Socket;
}

const EnterChatForm = ({ socket }: Props) => {
  const { setUser } = useUserActions();
  const { Title } = Typography;
  const [localUsername, setLocalUsername] = useState<string>("");

  useEffect(() => {
    const listener = (user: string) => {
      setUser(user);
    };
    socket.on("addUser", listener);

    return () => {
      socket.off("addUser", listener);
    };
  }, [socket]);

  const handleEnterChatroom = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("addUser", localUsername);
    setLocalUsername("");
  };

  return (
    <StyledChatFormWrapper>
      <Form autoComplete="off" onFinish={handleEnterChatroom}>
        <img src={loginChatLogo} />
        <Title level={3}>Login</Title>
        <Input
          onChange={(e) => setLocalUsername(e.target.value)}
          placeholder="Username"
          value={localUsername}
        />
        <Button type="primary" htmlType="submit" onClick={handleEnterChatroom}>
          {/* <LoginIcon /> */}
          Enter
        </Button>
      </Form>
    </StyledChatFormWrapper>
  );
};

export default EnterChatForm;
