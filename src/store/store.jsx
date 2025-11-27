import { configureStore } from "@reduxjs/toolkit";
import navControlsReducer from "../slices/navcontrols";

export const store = configureStore({
  reducer: {
    navControls: navControlsReducer,
  },
});
