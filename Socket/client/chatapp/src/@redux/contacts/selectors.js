import { createSelector } from "reselect";

// memoized intent
const getContacts = (state) => state.contacts;

export default {
  getContacts: createSelector(getContacts, (contacts) => contacts.contacts),
};
