import types from "./types";
import actionMaker from "../actionMaker";

export default {
  setMessages: actionMaker(types.SET_MESSAGES),
  clearMessages: actionMaker(types.CLEAR_MESSAGES),
};
