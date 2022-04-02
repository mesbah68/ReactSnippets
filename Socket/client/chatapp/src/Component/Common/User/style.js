import Styled from "styled-components";

export const StyledChatFormWrapper = Styled.div``;

export const StyledAvatarWrapper = Styled.div`
  display: flex;
  align-items: center;
  .ant-badge-dot {
   background : #29ae60;
   top: 30px;
  }
  .ant-avatar {
    img {
      width: 40px;
      height: 40px;
    }
}
`;

export const StyledUsername = Styled.span`
  flex-grow: 1;
  cursor: pointer;
`;
export const StyledIcon = Styled.span`
  margin-right: 0 !important;
  display: flex;
  align-items: center;
  svg {
    path {
     stroke: #2f80ed;
    }
  }
`;
