import Styled from "styled-components";

export const StyledMessageWrapper = Styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    input {
      border-radius: 50px;
      height: 65px;
      width: 100%;
      padding-left: 50px;
    }
    button {
      border: none;
      background-color: #2f80ed;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 10px;
      width: 50px;
      height: 50px;
      padding: 13px;
      &:hover {
        background-color: #2f80ed;
      }
      &.attach {
       right: 60px;
       background-color: #fff;
       svg {
        fill: gray
       }
      }
    }
  svg {
    fill: #fff
  }
  }
`;
export const StyledEmojiPickerWrapper = Styled.div`
  display: flex;
  position: fixed;
  z-index: 9999;
  left: 20px;
  bottom: 12%;
`;
export const StyledEmojiIcon = Styled.span`
  position: absolute;
  left: 20px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;
