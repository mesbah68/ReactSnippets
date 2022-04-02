import { useCallback } from "react";
import { useDispatch } from "react-redux";
import types from "./types";

/**
 * Main action dispatcher
 */
export default function () {
  const dispatch = useDispatch();

  /**
   * Add new channel
   */
  const addChannel = useCallback(
    (payload) => dispatch({ type: types.ADD_CHANNEL, payload }),
    [dispatch]
  );

  /**
   * Delete a channel
   */
  const deleteChannel = useCallback(
    (id) => dispatch({ type: types.DELETE_CHANNEL, payload: id }),
    [dispatch]
  );

  return {
    addChannel,
    deleteChannel,
  };
}
