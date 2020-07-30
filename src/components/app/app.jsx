import React from "react";

import { HeaderContainer } from "../header";
import "./app.scss";
import { HeroBar } from "../hero-bar";
import { HeroList } from "../hero-list";
import { HeroInfo } from "../hero-info";
import { NextButton } from "../next-button";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <HeroBar />
      <div className="flex">
        <HeroList />
        <HeroInfo />
      </div>
      <NextButton />
    </div>
  );
};

export { App };
