import Styled from "styled-components";

export const StyledChatListWrapper = Styled.div`
  height: 100vh;
  padding: 10px 20px;
  overflow: auto;
  scrollbar-width: none; 
  ::-webkit-scrollbar {
    display: none;
  }
  button {  
    border-radius: 15px;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  h4 {
    margin-top: 5px;
    margin-bottom: 0;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const StyledAvatarWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    background-color: #c1d8fa;
    padding: 10px;
  }
  img {
    width: 130px;
  }
`;

export const StyledUserName = Styled.span`
  flex-grow: 1;
  justify-content: flex-start !important;
  padding-left: 10px;
`;

export const StyledSearchWrapper = Styled.div`
  margin-top: 30px;
  position: relative;
  input {
    border-radius: 5px;
    height: 40px;
  }
  svg {
    position: absolute;
    right: 8px;
    top: 6px;
    cursor: pointer;
  }
`;

export const StyledSystemWrapper = Styled.div`
  border-top: 1px solid #f3f3f3;
  padding: 15px 0px;
  margin-top: 10px;
  h5 {
    font-size: 13px;
    color: #737373;
  }
`;

export const StyledAddContactWrapper = Styled.div`
  display: flex;
  padding: 50px 10px;
  flex-direction: column;
  button {
    margin-top: 15px;
    border-radius: 5px;
    font-size: 16px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: #fff;
      padding-bottom: 5px;
    }
  }
  input {
    height: 45px;
    border-radius: 5px;
  }
  span {
    padding-bottom: 5px;
    color: #424242;
  }
`;

export const StyledMoreOptionWrapper = Styled.div`
  position: absolute;
  right: 20px;
  top: 35px;
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  padding: 10px;
  border-radius: 5px;
  z-index: 99;
  cursor: pointer;
  width: 150px;
  color: #606060;
  span {
    padding-bottom: 5px;
  }
`;

export const StyledContactListWrapper = Styled.div`
  padding-top: 20px;
`;

export const StyledModalWrapper = Styled.div`
  .ant-modal-content {
    .ant-btn {
      border-radius: 14px;
    }
  }
`;

export const StyledUsername = Styled.span`
  flex-grow: 1;
  cursor: pointer;
  margin-left: 10px;
`;

export const StyledIconWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;


