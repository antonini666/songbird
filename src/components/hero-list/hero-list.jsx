import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  heroesLoaded,
  setCurrentHero,
} from "../../services/redux/heroes/actions";

import { DotaService } from "../../services/api/dota-service";
import "./hero-list.scss";
import { Spinner } from "../spinner";

const dotaService = new DotaService();

export const HeroList = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ heroes, classes }) => {
    return {
      heroes: heroes.heroes,
      loading: heroes.loading,
      step: classes.step,
    };
  });

  useEffect(() => {
    dotaService
      .getAllHero()
      .then((heroList) => dispatch(heroesLoaded(Object.values(heroList))));
  }, [dispatch]);

  const { heroes, step, loading } = state;

  if (loading) {
    return (
      <div className="hero-list loading">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="hero-list">
      <ul className="hero-list__items">
        {heroes[step].map((hero) => (
          <li
            className="hero-list__item"
            key={hero.id}
            onClick={dispatch.bind(this, setCurrentHero(hero))}
          >
            <span className="badge" />
            {hero.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
