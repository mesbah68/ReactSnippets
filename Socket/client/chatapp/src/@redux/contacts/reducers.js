import types from "./types";
import uuid from "react-uuid";

export const initialValues = {
  contacts: [],
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.ADD_CONTACT:
      const id = uuid();
      const newContact = {
        id: uuid(),
        ...payload,
        avatar: payload.avatar,
      };
      return {
        ...state,
        contacts: [newContact].concat(state.contacts),
      };
    case types.UPDATE_CONTACT:
      const updatedContact = state.contacts.find(
        (usr) => usr.id === payload.id
      );
      const updatedContactIndex = state.contacts.indexOf(updatedContact);
      const contacts = Object.values(state.contacts[updatedContactIndex]);
      contacts.splice(1, 1, payload.name);
      state.contacts[updatedContactIndex].name = contacts[1];
      return {
        ...state,
      };
    case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((usr) => usr.id !== payload),
      };
    default:
      return state;
  }
}
