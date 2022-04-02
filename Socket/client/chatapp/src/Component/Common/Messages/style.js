import Styled from "styled-components";

export const StyledMessagesWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
`;

export const StyledMessageItem = Styled.div``;
export const StyledMessageContent = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 78vh;
  overflow: auto;
  scrollbar-width: none; 
  ::-webkit-scrollbar {
    display: none;
  }`;
