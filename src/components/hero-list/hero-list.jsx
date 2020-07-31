import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setRightAnswer,
  setSelectedItems,
  setCurrentHero,
} from "../../services/redux/score/actions";

import { Spinner } from "../spinner";
import "./hero-list.scss";

export const HeroList = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ heroes, score }) => {
    return {
      heroes: heroes.heroes,
      loading: heroes.loading,
      error: heroes.error,
      step: score.step,
      selectedRightAnswer: score.selectedRightAnswer,
      rightAnswer: score.rightAnswer,
      selectedItems: score.selectedItems,
    };
  });

  const {
    heroes,
    step,
    loading,
    error,
    selectedRightAnswer,
    rightAnswer,
    selectedItems,
  } = state;

  const heroesList = Object.values(heroes)[step];

  const classes = (id) => {
    if (selectedRightAnswer) {
      if (rightAnswer + 1 === id) {
        return "hero-list__item--success";
      }
      if (selectedItems.includes(id)) {
        return "hero-list__item--error";
      }
    } else {
      if (selectedItems.includes(id)) {
        return "hero-list__item--error";
      }
    }
  };

  const onHeroItemClicked = (hero, id) => {
    dispatch(setCurrentHero(hero));
    if (!selectedRightAnswer) {
      if (rightAnswer + 1 === id) {
        dispatch(setRightAnswer(true));
      } else {
        dispatch(setSelectedItems(id));
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

  if (error) {
    return (
      <div className="hero-list loading">
        <div>Something went wrong</div>
      </div>
    );
  }

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
