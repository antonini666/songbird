import React from "react";

import Logo from "../../assets/image/logo.png";
import "./header.scss"

const Header = (props) => {
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
          <li className="header__item header__item--active">1</li>
          <li className="header__item">2</li>
          <li className="header__item">3</li>
          <li className="header__item">4</li>
          <li className="header__item">5</li>
          <li className="header__item">6</li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
