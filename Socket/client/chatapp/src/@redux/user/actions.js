import types from "./types";
import actionMaker from "../actionMaker";

export default {
  setUser: actionMaker(types.ADD_CONTACT),
  logout: actionMaker(types.LOGOUT),
};
