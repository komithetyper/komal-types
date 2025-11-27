import React from "react";
import TextBase from "../comps/home/TextBase";
import { useDispatch } from "react-redux";
import { setWordList } from "../slices/wordSlice";
import { generate } from "random-words";
import restart_icon from "../assets/restart.png";

function Home() {
  const dispatch = useDispatch();
  return (
    <div className="home-page">
      <TextBase />
      <button
        onClick={() => {
          dispatch(setWordList(generate({ exactly: 50, maxLength: 7 })));
        }}
      >
        <div className="restart-test">
          <img src={restart_icon} alt="Restart Test" />
        </div>
      </button>
    </div>
  );
}

export default Home;
