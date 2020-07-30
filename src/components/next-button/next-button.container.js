import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementStep } from "../../services/redux/hero-classes/actions";
import {
  nextStep,
  setRandomHeroAnswer,
} from "../../services/redux/score/actions";
import { nextStep as nextSteped } from "../../services/redux/heroes/actions";
import { NextButton } from "./next-button";

export const NextButtonContainer = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ score }) => ({
    disabled: score.selectedRightAnswer,
  }));

  const onHandler = () => {
    dispatch(incrementStep());
    dispatch(nextStep());
    dispatch(nextSteped());
    dispatch(setRandomHeroAnswer());
    [...document.querySelectorAll(".hero-list__item")].map((item) => {
      item.classList.remove("hero-list__item--success");
      item.classList.remove("hero-list__item--error");
      return item;
    });
  };

  return (
    <NextButton onHandler={onHandler.bind(this)} disabled={state.disabled} />
  );
};
