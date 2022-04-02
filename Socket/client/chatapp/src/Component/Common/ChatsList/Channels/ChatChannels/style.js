import Styled from "styled-components";

export const StyledChatChannelsWrapper = Styled.div`
  
`;

export const StyledUserItem = Styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 100%;
  > div {
    width: 100%;
  }
  span {
    margin-right: 10px;
  }
`;

export const StyledHeaderWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 10px;
  color: #858585;
  font-weight: bold;
  cursor: pointer;
`;
