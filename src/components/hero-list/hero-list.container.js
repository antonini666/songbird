import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setRightAnswer,
  setSelectedItems,
  setCurrentHero,
  playAudio,
} from "../../services/redux/score/actions";
import Correct from "../../assets/sounds/corect.mp3";
import Incorrect from "../../assets/sounds/incorrect.mp3";
import { Spinner } from "../spinner";
import { HeroList } from "./hero-list";

export const HeroListContainer = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ heroes, score }) => {
    return {
      heroes: heroes.heroes,
      loading: heroes.loading,
      error: heroes.error,
      step: score.step,
      isCorrectAnswer: score.isCorrectAnswer,
      rightAnswer: score.rightAnswer,
      selectedItems: score.selectedItems,
    };
  });

  const {
    heroes,
    step,
    loading,
    error,
    isCorrectAnswer,
    rightAnswer,
    selectedItems,
  } = state;

  const heroesList = Object.values(heroes)[step];

  const classes = (id) => {
    if (isCorrectAnswer) {
      if (rightAnswer + 1 === id) {
        return "hero-list__item--success";
      }
      if (selectedItems.includes(id)) {
        return "hero-list__item--error";
      }
    } else if (selectedItems.includes(id)) {
      return "hero-list__item--error";
    }
  };

  const onAnswersAudio = (correctAnswer) => {
    const audio = new Audio(correctAnswer ? Correct : Incorrect);
    const isPlaying =
      audio.currentTime > 0 &&
      !audio.paused &&
      !audio.ended &&
      audio.readyState > 2;

    if (!isPlaying) {
      audio.play();
    }
  };

  const onHeroItemClicked = (hero, id) => {
    dispatch(setCurrentHero(hero));
    dispatch(playAudio(true));
    if (!isCorrectAnswer) {
      if (rightAnswer + 1 === id) {
        dispatch(setRightAnswer(true));
        dispatch(playAudio(false));
        onAnswersAudio(true);
      } else if (!selectedItems.includes(id)) {
        dispatch(setSelectedItems(id));
        onAnswersAudio(false);
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
    <HeroList
      heroesList={heroesList}
      onHeroItemClicked={onHeroItemClicked}
      classes={classes}
    />
  );
};
