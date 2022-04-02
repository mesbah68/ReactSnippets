import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { StyledAvatarWrapper, StyledUsername, StyledIcon } from "./style";

interface Props {
  user: {
    name: string;
  };
  icon?: any;
}

const User = ({ user, icon }: Props) => {
  return (
    <StyledAvatarWrapper>
      <Avatar
        src="https://joeschmoe.io/api/v1/random"
        icon={<UserOutlined />}
        size="large"
      />
      <StyledUsername>{user.name}</StyledUsername>
      <StyledIcon>{icon}</StyledIcon>
    </StyledAvatarWrapper>
  );
};

export default User;
