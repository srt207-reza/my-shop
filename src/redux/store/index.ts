import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import selectedReducer from "./selected";

export const store = configureStore({
  reducer: {
    productsReducer,
    selectedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
