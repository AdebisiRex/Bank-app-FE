import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slice/user.slice";



const persistConfig = {
  key: "root",
  storage,
};

export const rootReducers = combineReducers({
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const logoutMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/logout") {
    persistStore(store, null, () => {
      store.dispatch({ type: "persist/PURGE", result: () => null });
      store.dispatch({
        type: "persist/REHYDRATE",
        payload: {},
        error: null,
      });
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([logoutMiddleware]),
});

const persistor = persistStore(store);
export { store, persistor };
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
