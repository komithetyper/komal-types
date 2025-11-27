import React from "react";
import { useSelector } from "react-redux";
import { getWordList } from "../../slices/wordSlice";

function TextBase() {
  const wordList = useSelector(getWordList);

  return (
    <div className="text-base">
      {wordList.map((word, wordIndex) => (
        <div className="word" key={wordIndex}>
          {word.split("").map((letter, letterIndex) => (
            <span className="letter" key={letterIndex}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TextBase;
