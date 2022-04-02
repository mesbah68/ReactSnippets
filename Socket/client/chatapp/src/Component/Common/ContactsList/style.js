import Styled from "styled-components";

export const StyledContactListWrapper = Styled.div`
  padding: 10px 20px 100px;
  background-color: #fff;
  position: relative;
  overflow: auto;
  height: 100vh;
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
    margin: 0;
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
  padding-bottom: 20px;
`;

export const StyledSearchWrapper = Styled.div`
  margin-top: 20px;
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

export const StyledAddContactWrapper = Styled.div`
  display: flex;
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

export const StyledContactListContent = Styled.div`
  padding-top: 20px;
`;

export const StyledModalWrapper = Styled.div`
  .ant-modal-body {
    height: 150px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .ant-modal-footer {
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

export const StyledHeaderWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0;
  color: #858585;
  font-weight: bold;
`;

export const StyledIconWrapper = Styled.div`
  cursor: pointer;
  svg {
    margin: 5px;
  }
`;

export const StyledAddContactButton = Styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #15b015;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    right: 20px ;
    color: #fff;
    font-size: 30px;
    span {
        padding-top: 5px;
    }
`;
