import React from "react";
import { Result } from "./result";
import { useDispatch, useSelector } from "react-redux";

export const ResultContainer = () => {
  const dispatch = useDispatch();

  const score = useSelector(({ score }) => score.score);

  return <Result score={score} />;
};
