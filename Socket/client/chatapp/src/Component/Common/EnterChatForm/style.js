import Styled from "styled-components";

export const StyledChatFormWrapper = Styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  form {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100px;
  }
  h3 {
    margin-bottom: 20px;
  }
  input {
      width: 300px;
      border-radius: 15px;
      height: 45px;
      border-radius: 25px;
  }
  button {
      margin-left: 10px;
      border-radius: 15px;
      font-size: 16px;
      width: 100%;
      margin-top: 20px;
      height: 45px;
      border-radius: 25px;
  }
`;
