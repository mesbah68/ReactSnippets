import Styled from "styled-components";

export const StyledChatWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #fff;
  border-radius: 10px;
  height: 100vh;
`;

export const StyledMessageWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  background-color: #f1f4ff;
`;
export const StyledMessageContent = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #fafcff;
`;
export const StyledChatRoomHeader = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 10px;
  margin-left: 1px;
  margin-bottom: 2px;
  border-radius: 0;
  h5 {
    margin: 0;
    padding-left: 15px;
    flex-grow: 1;
    span {
        margin-right: 10px;
    }
  }
  svg {
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const StyledProfileWrapper = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        cursor: pointer;
        margin: 0 15px;
    }
    span {
        &.username {
            margin-right: 10px;
        }
    }
`;

export const StyledShowMoreWrapper = Styled.div`
    position: absolute;
    right: 20px;
    top: 65px;
    background-color: #fff;
    border-radius: 3px;
    z-index: 99;
    width: 130px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    span {
        cursor: pointer;
    }
`;

export const StyledUserWrapper = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
