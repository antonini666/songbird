import React from "react";

import "./hero-list.scss";

export const HeroList = () => {
  return (
    <div className="hero-list">
      <ul className="hero-list__items">
        <li className="hero-list__item">
          <span className="badge" />1
        </li>
        <li className="hero-list__item">
          <span className="badge" />2
        </li>
        <li className="hero-list__item">
          <span className="badge" />3
        </li>
        <li className="hero-list__item">
          <span className="badge" />4
        </li>
        <li className="hero-list__item">
          <span className="badge" />5
        </li>
        <li className="hero-list__item">
          <span className="badge" />6
        </li>
      </ul>
    </div>
  );
};
