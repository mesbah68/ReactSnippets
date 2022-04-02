import { useCallback } from "react";
import { useDispatch } from "react-redux";
import types from "./types";

/**
 * Main action dispatcher
 */
export default function () {
  const dispatch = useDispatch();

  /**
   * Add new contact
   */
  const addContact = useCallback(
    (payload) => dispatch({ type: types.ADD_CONTACT, payload }),
    [dispatch]
  );

  /**
   * Delete a contact
   */
  const deleteContact = useCallback(
    (id) => dispatch({ type: types.DELETE_CONTACT, payload: id }),
    [dispatch]
  );

  /**
   * Update a contact
   */
  const updateContact = useCallback(
    (payload) => dispatch({ type: types.UPDATE_CONTACT, payload }),
    [dispatch]
  );

  return {
    addContact,
    deleteContact,
    updateContact,
  };
}
