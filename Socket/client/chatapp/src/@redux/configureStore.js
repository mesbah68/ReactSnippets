import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import messageReducer from "./message/reducers";
import userReducer from "./user/reducers";
import contactsReducer from "./contacts/reducers";
import channelsReducer from "./channels/reducers";
import chatReducer from "./chat/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "contacts","channels","chat"],
};

const configureStore = () => {
  const middleware = composeWithDevTools();
  const rootReducer = combineReducers({
    message: messageReducer,
    contacts: contactsReducer,
    user: userReducer,
    channels: channelsReducer,
    chat: chatReducer,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, middleware);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
