import { useCallback } from "react";
import { useDispatch } from "react-redux";
import types from "./types";

/**
 * Main action dispatcher
 */
export default function useHook() {
  const dispatch = useDispatch();

  /**
   * Send a message to active chat
   */
  const setMessages = useCallback(
    (message) => dispatch({ type: types.SET_MESSAGES, payload: message }),
    [dispatch]
  );

  /**
   * Send a message to active chat
   */
  const editMessage = useCallback(
      (message) => dispatch({ type: types.EDIT_MESSAGE, payload: message }),
      [dispatch]
  );

  /**
   * Remove a message from messages list
   */
  const removeMessage = useCallback(
    (id) => dispatch({ type: types.REMOVE_MESSAGE, payload: id }),
    [dispatch]
  );

  /**
   * Clear all messages
   */
  const clearAllMessages = useCallback(
    (title) => dispatch({ type: types.CLEAR_ALL_MESSAGES, payload: title }),
    [dispatch]
  );

  return {
    setMessages,
    editMessage,
    removeMessage,
    clearAllMessages,
  };
}
