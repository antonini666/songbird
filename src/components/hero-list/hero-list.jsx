import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  heroesLoaded,
  setCurrentHero,
} from "../../services/redux/heroes/actions";
import { decrementMaxPoints } from "../../services/redux/score/actions";

import { setRightAnswer } from "../../services/redux/score/actions";

import { DotaService } from "../../services/api/dota-service";
import "./hero-list.scss";
import { Spinner } from "../spinner";

const dotaService = new DotaService();

export const HeroList = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ heroes, classes, score }) => {
    return {
      heroes: heroes.heroes,
      loading: heroes.loading,
      step: classes.step,
      selectedRightAnswer: score.selectedRightAnswer,
    };
  });

  useEffect(() => {
    dotaService
      .getAllHero()
      .then((heroList) => dispatch(heroesLoaded(Object.values(heroList))));
  }, [dispatch]);

  const { heroes, step, loading, selectedRightAnswer } = state;

  const onHandler = (hero, id) => {
    if (!selectedRightAnswer) {
      dispatch(setCurrentHero(hero));
      dispatch(setRightAnswer(id));
      dispatch(decrementMaxPoints());
    } else {
      dispatch(setCurrentHero(hero));
    }
  };

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
            onClick={onHandler.bind(this, hero, hero.id)}
          >
            <span className="badge" />
            {hero.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
