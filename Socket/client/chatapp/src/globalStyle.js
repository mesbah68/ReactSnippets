import { createGlobalStyle } from "styled-components";
import Fonts from "./assets/fonts/gilroy/Gilroy-Medium.ttf";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f1f4ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: "GilroyBlack";
    src: local("GilroyBlack"),
    url(${Fonts}) format("truetype");
    font-weight: bold;
  }
  .font-face-gb {
    font-family: "GilroyBlack";
  }
  .bg-white {
    background-color: #fff;
    color: #686868;
    border-radius: 10px 10px 10px 0;
  }
  .bg-blue {
    background-color: #2f80ed;
    color: #fff;
    float: right;
    border-radius: 10px 10px 0 10px;
  }
  .sidebar {
    .ant-drawer-body {
        padding: 0;
    }
  }
  .chat-btn {
    border-radius: 4px;
  }
`;

export default GlobalStyle;
