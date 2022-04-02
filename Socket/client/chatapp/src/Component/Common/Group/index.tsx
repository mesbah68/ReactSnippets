import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import {
  StyledGroupWrapper,
  StyledIcon,
  StyledDetail,
  StyledTitle,
} from "./style";

interface Props {
  title: string;
  icon?: any;
  detail?: any;
  onClick?: Function;
  className?: string;
}

const Group = ({ title, icon, detail, onClick, className }: Props) => {
  return (
    <StyledGroupWrapper onClick={onClick}>
      { icon && <StyledIcon className={className}>{icon}</StyledIcon> }
      <StyledTitle>{title}</StyledTitle>
      <StyledDetail>{detail}</StyledDetail>
    </StyledGroupWrapper>
  );
};

export default Group;
