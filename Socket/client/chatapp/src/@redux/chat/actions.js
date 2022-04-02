import types from "./types";
import actionMaker from "../actionMaker";

export default {
  setActiveChat: actionMaker(types.SET_ACTIVE_CHAT),
};
