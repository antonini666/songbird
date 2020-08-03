import React, { useRef } from "react";
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
    selectedRightAnswer: score.selectedRightAnswer,
    step: score.step,
  }));

  const {
    rightAnswer,
    heroes,
    error,
    step,
    loading,
    selectedRightAnswer,
  } = state;

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

  const hero = Object.values(heroes)[step][rightAnswer];

  if (error) {
    return (
      <div className="hero-bar loading">
        <div>Something went wrong</div>
      </div>
    );
  }

  return (
    <HeroBar
      loading={loading}
      error={error}
      selectedRightAnswer={selectedRightAnswer}
      hero={hero}
      onPause={onPause}
      audioRef={audioRef}
    />
  );
};
