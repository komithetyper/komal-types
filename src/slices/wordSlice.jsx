import { createSlice } from "@reduxjs/toolkit";
import { generate } from "random-words";
import { getWordModeCount } from "./navcontrolsSlice";
import { useSelector } from "react-redux";

const initialState = {
  // array of words, each word is a string
  wordList : generate({ exactly: 50, maxLength: 7 }),
};

const wordSlice = createSlice({
  name: "wordSlice",
  initialState,
  reducers: {
    setWordList(state, action) {
      state.wordList = generate({ exactly: 50, maxLength: 7 });
    },

    setWordListFromCount(state, action) {
      const wordCount = action.payload;
      if (typeof wordCount === 'number' && wordCount > 0) {
        state.wordList = generate({ exactly: wordCount, maxLength: 7 });
      }
    }
  },
});

export const { setWordList, setWordListFromCount } = wordSlice.actions;

// Selectors
export const selectWordState = (state) => state.wordSlice;

export const getWordList = (state) =>
  state.wordSlice?.wordList ?? initialState.wordList;

export default wordSlice.reducer;
