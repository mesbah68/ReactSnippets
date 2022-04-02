import Styled from "styled-components";

export const StyledChatFormWrapper = Styled.div``;

export const StyledGroupWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  .ant-badge-dot {
      background : #29ae60;
      top: 30px;
  }
`;
export const StyledIcon = Styled.span`
  margin-right: 25px;
  margin-left: 5px;
  cursor: default;
  &:first-child {
      margin-left: 0;
  }
  svg {
      path {
          stroke: #6f6f6f;
      }
  }
`;
export const StyledDetail = Styled.span`
  color: #949393;
  cursor: pointer;  
  &:hover {
    color: #646464;
  }
`;
export const StyledTitle = Styled.span`
  flex-grow: 1;
  color: #949393;
  cursor: pointer;  
  &:hover {
    color: #646464;
  }
`;
