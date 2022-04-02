import { createContext } from "react";

interface ChatContextInterface {
  user: any;
  setUser: Function;
  messages: any;
  setMessages: Function;
}

const defaultState = {
  user: {},
  setUser: () => {},
  messages: {},
  setMessages: () => {},
};

const Context = createContext<ChatContextInterface>(defaultState);
export default Context;
