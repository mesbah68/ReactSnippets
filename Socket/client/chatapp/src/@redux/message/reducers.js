import { uuid } from "react-uuid";
import types from "./types";

export const initialValues = {
  messagesList: [],
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.SET_MESSAGES:
      return {
        ...state,
        messagesList: payload,
      };
    case types.EDIT_MESSAGE:
      const editedMessage = state.messagesList.find(
          (item) => item?.messages?.id === payload.id
      );
      const editedMessageIndex = state.messagesList.indexOf(editedMessage);
      state.messagesList[editedMessageIndex].messages.text = payload.text;
      return {
        ...state,
      };
    case types.REMOVE_MESSAGE:
      return {
        ...state,
        messagesList: state.messagesList.filter((item) => item?.messages?.id !== payload),
      };
    case types.CLEAR_ALL_MESSAGES:
      return {
        ...state,
        messagesList: state.messagesList.filter((item) => item?.to !== payload),
      };
    default:
      return state;
  }
}
