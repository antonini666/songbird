import React from "react";

import WinGif from "../../assets/image/win.gif";
import "./result.scss";

export const Result = ({ score }) => {
  return (
    <div className="result">
      {score === 30 ? (
        <div className="result__image">
          <img src={WinGif} alt="win" />
        </div>
      ) : (
        <React.Fragment>
          <div className="result__title">Congratulations!</div>
          <div className="result__description">
            You passed the quiz and scored <span>{score}</span> out of{" "}
            <span>30</span> possible points
          </div>
          <button className="result__btn">Do you want to try again</button>
        </React.Fragment>
      )}
    </div>
  );
};
