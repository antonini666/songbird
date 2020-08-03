import React from "react";

import Logo from "../../assets/image/logo.png";
import { HeaderNav } from "./header-nav";
import "./header.scss";

export const Header = ({ state }) => {
  const { score, heroesClasses, step, loading } = state;

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__score">
          Score: <span>{score}</span>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <HeaderNav classes={heroesClasses} step={step} loading={loading} />
        </ul>
      </nav>
    </header>
  );
};
