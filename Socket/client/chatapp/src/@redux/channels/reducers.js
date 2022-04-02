import types from "./types";
import uuid from "react-uuid";

export const initialValues = {
  channelsList: [
    {
      id: uuid(),
      name: "Share-Ukhtae",
      icon: "😻",
      detail: "star",
      type: "chat",
    },
    {
      id: uuid(),
      name: "General-Chat",
      icon: "💬",
      type: "chat",
    },
    {
      id: uuid(),
      name: "Introducing",
      icon: "👋",
      type: "chat",
    },
    {
      id: uuid(),
      name: "Gibahin-Dribbble",
      icon: "😂",
      type: "chat",
    },
    {
      id: uuid(),
      name: "Share-Shot",
      icon: "👍",
      type: "chat",
    },
    {
      id: uuid(),
      name: "Podchess",
      icon: "🎤",
      detail: "3/5",
      type: "voice",
    },
    {
      id: uuid(),
      name: "Design-Terus",
      detail: "0/5",
      icon: "🎨",
      type: "voice",
    },
    {
      id: uuid(),
      name: "Bincang-Caem",
      detail: "0/5",
      icon: "🤑",
      type: "voice",
    },
  ],
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.ADD_CHANNEL:
      const newChannel = {
        id: uuid(),
        ...payload,
      };
      return {
        ...state,
        channels: [newChannel].concat(state.channels),
      };
    case types.DELETE_CHANNEL:
      return {
        ...state,
        channels: state.channels.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
