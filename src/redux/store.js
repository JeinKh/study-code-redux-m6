import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/actions";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
