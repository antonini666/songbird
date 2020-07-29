import React from "react";

import { HeaderContainer } from "../header";
import "./app.scss";
import { HeroBar } from "../hero-bar";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <HeroBar />
    </div>
  );
};

export { App };
