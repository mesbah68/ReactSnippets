import types from "./types";
import actionMaker from "../actionMaker";

export default {
  addChannel: actionMaker(types.ADD_CHANNEL),
  deleteChannel: actionMaker(types.DELETE_CHANNEL),
};
