import { configureStore } from "@reduxjs/toolkit";
import advertisementReducer from "./slices/advertisement";

export const store = configureStore({
  reducer: {
    advertisement: advertisementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
