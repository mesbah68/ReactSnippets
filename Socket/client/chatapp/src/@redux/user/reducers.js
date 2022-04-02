import types from "./types";

export const initialValues = {
  info: {},
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.SET_USER:
      return {
        ...state,
        info: payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        info: {},
      };
    default:
      return state;
  }
}
