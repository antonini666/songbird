import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { HeroBar } from "./hero-bar";
import { Spinner } from "../spinner";

export const HeroBarContainer = () => {
  const audioRef = useRef(null);

  const state = useSelector(({ score, heroes }) => ({
    heroes: heroes.heroes,
    loading: heroes.loading,
    error: heroes.error,
    rightAnswer: score.rightAnswer,
    isCorrectAnswer: score.isCorrectAnswer,
    isAudioPlay: score.isAudioPlay,
    step: score.step,
  }));

  const {
    rightAnswer,
    heroes,
    error,
    step,
    loading,
    isCorrectAnswer,
    isAudioPlay,
  } = state;

  useEffect(() => {
    console.log(
      Object.entries(heroes).length > 0
        ? `Correct answer: ${Object.values(heroes)[step][rightAnswer].name}`
        : "loading..."
    );
  }, [heroes, rightAnswer, step]);

  const onPause = () => {
    audioRef.current.audio.current.pause();
  };

  if (loading) {
    return (
      <div className="hero-bar loading">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero-bar loading">
        <div>Something went wrong</div>
      </div>
    );
  }

  return (
    <HeroBar
      isCorrectAnswer={isCorrectAnswer}
      hero={Object.values(heroes)[step][rightAnswer]}
      onPause={onPause}
      isAudioPlay={isAudioPlay}
      audioRef={audioRef}
    />
  );
};
