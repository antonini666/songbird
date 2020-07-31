import React from "react";

import { HeroBar } from "../hero-bar";
import { HeroList } from "../hero-list";
import { HeroInfo } from "../hero-info";
import { NextButtonContainer } from "../next-button";
import { Header } from "../header";
import "./app.scss";
import { ResultContainer } from "../result";

const App = ({ step }) => {
  return (
    <div className="container">
      <Header />
      {step < 6 ? (
        <React.Fragment>
          <HeroBar />
          <div className="flex">
            <HeroList />
            <HeroInfo />
          </div>
          <NextButtonContainer />
        </React.Fragment>
      ) : (
        <ResultContainer />
      )}
    </div>
  );
};

export { App };
