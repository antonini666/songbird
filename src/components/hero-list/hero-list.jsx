import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setRightAnswer } from "../../services/redux/score/actions";
import { DotaService } from "../../services/api/dota-service";
import { Spinner } from "../spinner";
import {
  heroesLoaded,
  setCurrentHero,
} from "../../services/redux/heroes/actions";
import {
  decrementMaxPoints,
  incrementScore,
} from "../../services/redux/score/actions";
import "./hero-list.scss";

const dotaService = new DotaService();

export const HeroList = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ heroes, classes, score }) => {
    return {
      heroes: heroes.heroes,
      loading: heroes.loading,
      step: classes.step,
      selectedRightAnswer: score.selectedRightAnswer,
      rightAnswer: score.rightAnswer,
    };
  });

  const onClickedAnswer = (e) => {
    return (
      !e.classList.contains("hero-list__item--error") &&
      !e.classList.contains("hero-list__item--success")
    );
  };

  useEffect(() => {
    dotaService
      .getAllHero()
      .then((heroList) => dispatch(heroesLoaded(Object.values(heroList))));
  }, [dispatch]);

  const { heroes, step, loading, selectedRightAnswer, rightAnswer } = state;

  const onHandler = (e, hero, id) => {
    dispatch(setCurrentHero(hero));
    if (!selectedRightAnswer) {
      if (onClickedAnswer(e)) {
        if (id === rightAnswer) {
          e.classList.add("hero-list__item--success");
          dispatch(incrementScore());
          dispatch(setRightAnswer(true));
        } else {
          e.classList.add("hero-list__item--error");
          dispatch(decrementMaxPoints());
        }
      }
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
            onClick={(e) => onHandler(e.target, hero, hero.id)}
          >
            <span className="badge" />
            {hero.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
