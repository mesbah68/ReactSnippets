import { createSelector } from "reselect";

// memoized intent
const getUser = (state) => state.user;

export default {
  getUser: createSelector(getUser, (user) => user.info),
};
