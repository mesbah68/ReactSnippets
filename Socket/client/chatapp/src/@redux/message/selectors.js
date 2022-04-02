import { createSelector } from "reselect";

// memoized message
const getMessage = (state) => {
  return state.message;
};

export default {
  getMessagesList: createSelector(getMessage, (message) => {
    return message.messagesList;
  }),
};
