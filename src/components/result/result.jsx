import React from "react";

import WinGif from "../../assets/image/win.gif";
import "./result.scss";

export const Result = ({ score, onResetGame }) => {
  return (
    <div className="result">
      {score === 30 ? (
        <React.Fragment>
          <div className="result__image">
            <img src={WinGif} alt="win" />
          </div>
          <h3 className="result__title result__title--win">
            You`re incredible
          </h3>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h3 className="result__title">Congratulations!</h3>
          <h4 className="result__description">
            You passed the quiz and scored <span>{score}</span> out of{" "}
            <span>30</span> possible points
          </h4>
          <button onClick={onResetGame} className="result__btn">
            Do you want to try again
          </button>
        </React.Fragment>
      )}
    </div>
  );
};
