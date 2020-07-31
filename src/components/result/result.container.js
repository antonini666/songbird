import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetGame } from "../../services/redux/score/actions";
import { Result } from "./result";

export const ResultContainer = () => {
  const dispatch = useDispatch();

  const score = useSelector(({ score }) => score.score);

  const onResetGame = () => {
    dispatch(resetGame());
  };

  return <Result score={score} onResetGame={onResetGame} />;
};
