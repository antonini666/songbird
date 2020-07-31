import React from "react";
import { useSelector } from "react-redux";

import Logo from "../../assets/image/logo.png";
import { HeaderNav } from "./header-nav";
import "./header.scss";

export const Header = () => {
  const state = useSelector(({ heroes, score }) => {
    return {
      heroesClasses: heroes.heroes,
      step: score.step,
      loading: heroes.loading,
      score: score.score,
    };
  });

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__score">Score: {state.score}</div>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <HeaderNav
            classes={state.heroesClasses}
            step={state.step}
            loading={state.loading}
          />
        </ul>
      </nav>
    </header>
  );
};
