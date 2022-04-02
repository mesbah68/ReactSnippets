import types from "./types";

export const initialValues = {
  activeChat: {},
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: payload,
      };
    default:
      return state;
  }
}
