import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetGame } from "../../services/redux/score/actions";
import WinAudio from "../../assets/sounds/champion.mp3";
import { Result } from "./result";

export const ResultContainer = () => {
  const dispatch = useDispatch();

  const score = useSelector(({ score }) => score.score);

  useEffect(() => {
    if (score === 30) {
      const audio = new Audio(WinAudio);
      audio.volume = 0.5;
      audio.play();
    }
  }, [score]);

  const onResetGame = () => {
    dispatch(resetGame());
  };

  return <Result score={score} onResetGame={onResetGame} />;
};
