import React from "react";
import Logo from "../../assets/image/logo.png";
import { HeaderNav } from "./header-nav";
import "./header.scss";

export const Header = ({ loading, classes, step }) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__score">Score:</div>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <HeaderNav classes={classes} step={step} loading={loading} />
        </ul>
      </nav>
    </header>
  );
};
