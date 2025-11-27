import { configureStore } from "@reduxjs/toolkit";
import navControlsReducer from "../slices/navcontrolsSlice";
import wordSlice from "../slices/wordSlice";

export const store = configureStore({
  reducer: {
    navControlsSlice: navControlsReducer,
    wordSlice: wordSlice,
  },
});
