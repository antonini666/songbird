import React from "react";

import { HeaderContainer } from "../header";
import "./app.scss";
import { HeroBar } from "../hero-bar";
import { HeroList } from "../hero-list";
import { HeroInfo } from "../hero-info";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <HeroBar />
      <div className="flex">
        <HeroList />
        <HeroInfo />
      </div>
      <button className="btn-next" disabled>
        Next level
      </button>
    </div>
  );
};

export { App };
