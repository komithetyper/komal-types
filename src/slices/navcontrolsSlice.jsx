import { createSlice } from "@reduxjs/toolkit";
import {
  NavControlsMode,
  TimeModeDuration,
  WordModeCount,
} from "../constants/enums";

const initialState = {
  mode: NavControlsMode.TIME,
  timeModeDuration: TimeModeDuration.THIRTY,
  wordModeCount: WordModeCount.TWENTY_FIVE,
};

const navControlsSlice = createSlice({
  name: "navControlsSlice",
  initialState,
  reducers: {
    setNavControlMode(state, action) {
      const mode = action.payload;
      if (mode === NavControlsMode.TIME || mode === NavControlsMode.WORD) {
        state.mode = mode;
      }
    },
    setTimeModeDuration(state, action) {
      const duration = action.payload;
      if (Object.values(TimeModeDuration).includes(duration)) {
        state.timeModeDuration = duration;
      }
    },
    setWordModeCount(state, action) {
      const count = action.payload;
      if (Object.values(WordModeCount).includes(count)) {
        state.wordModeCount = count;
      }
    },
  },
});

export const {
  setNavControlMode,
  setTimeModeDuration,
  setWordModeCount,
} = navControlsSlice.actions;

// Selectors
export const getNavControlMode = (state) =>
  state.navControlsSlice?.mode ?? initialState.mode;

export const getTimeModeDuration = (state) =>
  state.navControlsSlice?.timeModeDuration ?? initialState.timeModeDuration;

export const getWordModeCount = (state) =>
  state.navControlsSlice?.wordModeCount ?? initialState.wordModeCount;

export default navControlsSlice.reducer;
