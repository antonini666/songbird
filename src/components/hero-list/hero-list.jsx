import React from "react";

import "./hero-list.scss";

export const HeroList = ({ heroesList, onHeroItemClicked, classes }) => {
  return (
    <div className="hero-list">
      <ul className="hero-list__items">
        {heroesList.map((hero) => (
          <li
            className={`hero-list__item ${classes(hero.id)}`}
            key={hero.id}
            onClick={onHeroItemClicked.bind(this, hero, hero.id)}
          >
            <span className="badge" />
            {hero.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
