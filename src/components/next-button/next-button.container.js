import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { nextStep } from "../../services/redux/score/actions";
import { NextButton } from "./next-button";

export const NextButtonContainer = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ score }) => ({
    disabled: score.selectedRightAnswer,
  }));

  const onNextButtonClick = () => {
    dispatch(nextStep());
  };

  return <NextButton onHandler={onNextButtonClick} disabled={state.disabled} />;
};
