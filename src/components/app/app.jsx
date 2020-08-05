import React from "react";

import { HeroBarContainer } from "../hero-bar";
import { HeroListContainer } from "../hero-list";
import { HeroInfoContainer } from "../hero-info";
import { NextButtonContainer } from "../next-button";
import { HeaderContainer } from "../header";
import "./app.scss";
import { ResultContainer } from "../result";

const App = ({ step }) => {
  return (
    <div className="container">
      <HeaderContainer />
      {step < 6 ? (
        <React.Fragment>
          <HeroBarContainer />
          <div className="flex">
            <HeroListContainer />
            <HeroInfoContainer />
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
