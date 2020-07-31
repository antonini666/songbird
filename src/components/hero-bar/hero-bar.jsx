import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";

import QuestionMark from "../../assets/image/question-mark.png";
import { Spinner } from "../spinner";
import "./hero-audio.scss";
import "./hero-bar.scss";

export const HeroBar = () => {
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

  console.log(rightAnswer);

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

  const hero = Object.values(heroes)[step][rightAnswer];

  return (
    <div className="hero-bar">
      <div className="hero-bar__image">
        <img
          src={!selectedRightAnswer ? QuestionMark : hero.image}
          alt="hero"
        />
      </div>
      <div className="hero-bar__container">
        <div className="hero-bar__name">
          {selectedRightAnswer ? hero.name : "******"}
        </div>
        <div className="hero-bar__audio">
          <AudioPlayer
            src={hero.audio}
            showJumpControls={false}
            onCanPlay={onPause}
            ref={audioRef}
          />
        </div>
      </div>
    </div>
  );
};
