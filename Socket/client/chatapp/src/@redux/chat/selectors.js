import { createSelector } from "reselect";

// memoized intent
const getActiveChat = (state) => state.chat;

export default {
  getActiveChat: createSelector(getActiveChat, (chat) => chat.activeChat),
};
