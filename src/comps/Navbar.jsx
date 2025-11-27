import React from "react";
import keypad_icon from "../assets/keyboard_icon.png";
import info_icon from "../assets/info_icon.png";
import text_icon from "../assets/text_icon.png";
import time_icon from "../assets/time_icon.png";
import { Link } from "react-router-dom";
import {
  NavControlsMode,
  TimeModeDuration,
  WordModeCount,
} from "../constants/enums";
import { useSelector, useDispatch } from "react-redux";
import {
  getNavControlMode,
  setNavControlMode,
  getTimeModeDuration,
  getWordModeCount,
  setTimeModeDuration,
  setWordModeCount,
} from "../slices/navcontrolsSlice";
import { setWordList, setWordListFromCount } from "../slices/wordSlice";

function Navbar() {
  const mode = useSelector(getNavControlMode);
  const timeModeDuration = useSelector(getTimeModeDuration);
  const wordModeCount = useSelector(getWordModeCount);
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <Link to={"/"} className="logo">
          RapidType
        </Link>

        <div className="links">
          <Link className="link">
            <img src={keypad_icon} alt="" />
          </Link>

          <Link className="link">
            <img src={info_icon} alt="" />
          </Link>
        </div>
      </nav>

      <div className="nav-controls-wrapper">
        <div className="nav-controls">
          <div className="mode">
            <button
              onClick={() => {
                dispatch(setNavControlMode(NavControlsMode.TIME));
                dispatch(setWordList());
              }}
              className={`time ${
                mode === NavControlsMode.TIME ? "active" : ""
              }`}
            >
              <img src={time_icon} alt="" className="timeicon" />
              time
            </button>

            <button
              onClick={() => dispatch(setNavControlMode(NavControlsMode.WORD))}
              className={`words ${
                mode === NavControlsMode.WORD ? "active" : ""
              }`}
            >
              <img src={text_icon} alt="" className="wordicon" />
              words
            </button>
          </div>

          <div className="seperator"></div>

          <div className="mode-details">
            {mode === NavControlsMode.TIME && (
              <div className="time-details">
                {Object.values(TimeModeDuration).map((duration) => (
                  <button
                    key={duration}
                    className={duration === timeModeDuration ? "active" : ""}
                    onClick={() => {
                      dispatch(setTimeModeDuration(duration));
                      dispatch(setWordList());
                    }}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            )}

            {mode === NavControlsMode.WORD && (
              <div className="words-details">
                {Object.values(WordModeCount).map((count) => (
                  <button
                    key={count}
                    className={count === wordModeCount ? "active" : ""}
                    onClick={() => {
                      dispatch(setWordModeCount(count));
                      dispatch(setWordListFromCount(count));
                    }}
                  >
                    {count}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
