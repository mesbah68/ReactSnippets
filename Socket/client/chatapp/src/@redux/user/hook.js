import { useCallback } from "react";
import { useDispatch } from "react-redux";
import types from "./types";

/**
 * Main action dispatcher
 */
export default function () {
  const dispatch = useDispatch();

  /**
   * Set user info
   */
  const setUser = useCallback(
    (payload) => dispatch({ type: types.SET_USER, payload }),
    [dispatch]
  );

  /**
   * Log user out
   */
  const logout = useCallback(
    () => dispatch({ type: types.LOGOUT }), 
  [dispatch]
  );

  return {
    setUser,
    logout,
  };
}
