import { createSelector } from "reselect";

// memoized intent
const getChannels = (state) => state.channels;

export default {
  getChannels: createSelector(getChannels, (channels) => channels.channels),
};
