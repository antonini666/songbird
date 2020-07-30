import React from "react";

import { HeroBar } from "../hero-bar";
import { HeroList } from "../hero-list";
import { HeroInfo } from "../hero-info";
import { NextButtonContainer } from "../next-button";
import WinGif from "../../assets/image/win.gif";
import { HeaderContainer } from "../header";
import "./app.scss";

const App = ({ step, heroClasses }) => {
  return (
    <div className="container">
      <HeaderContainer />

      {true ? (
        <React.Fragment>
          <HeroBar />
          <div className="flex">
            <HeroList />
            <HeroInfo />
          </div>
          <NextButtonContainer />
        </React.Fragment>
      ) : (
        <div className="result">
          {false ? (
            <div className="result__image">
              <img src={WinGif} alt="win" />
            </div>
          ) : (
            <React.Fragment>
              <div className="result__title">Congratulations!</div>
              <div className="result__description">
                You passed the quiz and scored 6 out of 30 possible points
              </div>
              <button className="result__btn">Do you want to try again</button>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export { App };
