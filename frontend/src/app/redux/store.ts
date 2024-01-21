import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({ cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
