import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../store/reducers/numberSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
