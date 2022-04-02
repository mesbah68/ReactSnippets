import types from "./types";
import actionMaker from "../actionMaker";

export default {
  addContact: actionMaker(types.ADD_CONTACT),
  deleteContact: actionMaker(types.DELETE_CONTACT),
};
