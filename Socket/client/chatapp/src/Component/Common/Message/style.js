import Styled from "styled-components";

export const StyledMessageItem = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-bottom: 40px;
  &.currentUser {
    flex-direction: row-reverse;
    float: right;
  }
`;
export const StyledMessageText = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: end;
  max-width: 75%;
  margin-left: 10px;
  div {
    &.bg-blue {
      margin-right: 10px;
    }
  }
  span {
    position: absolute;
    bottom: -25px;
    left: 0;
    min-width: 50px;
    color: #ccc;
    &.currentUser {
      right: 0;
      left: auto;
    }
  }
  > div {
    height: auto;
    display: inline-block;
    padding: 10px;
    display: inline-block;
    &:last-child {
      width: 65%;
    }
  }
`;
export const StyledIconsWrapper = Styled.div`
  cursor: pointer;
  svg {
    margin-right: 10px;
    g, path {
      stroke: gray !important;
    }
  }
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

export const StyledEditMessageWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 15px;
    border-radius: 5px;
    font-size: 16px;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: #fff;
      padding-bottom: 5px;
      padding-top: 5px;
    }
  }
  input {
    height: 45px;
    border-radius: 5px;
  }
  span {
    padding-bottom: 10px;
    color: #424242;
  }
`;
