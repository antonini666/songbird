import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import QuestionMark from "../../assets/image/question-mark.png";

import { Spinner } from "../spinner";
import "./hero-audio.scss";
import "./hero-bar.scss";
import { useSelector } from "react-redux";

export const HeroBar = () => {
  const audioRef = useRef(null);

  const state = useSelector(({ score, heroes, classes }) => ({
    rightAnswer: score.rightAnswer,
    hero: heroes.heroes,
    selectedRightAnswer: score.selectedRightAnswer,
    step: classes.step,
    loading: heroes.loading,
  }));

  const { rightAnswer, hero, step, loading, selectedRightAnswer } = state;

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

  console.log(selectedRightAnswer);

  return (
    <div className="hero-bar">
      <div className="hero-bar__image">
        <img
          src={
            !selectedRightAnswer
              ? QuestionMark
              : hero[step][rightAnswer - 1].image
          }
          alt="hero"
        />
      </div>
      <div className="hero-bar__container">
        <div className="hero-bar__name">
          {selectedRightAnswer ? hero[step][rightAnswer - 1].name : "******"}
        </div>
        <div className="hero-bar__audio">
          <AudioPlayer
            src={hero[step][rightAnswer - 1].audio}
            showJumpControls={false}
            onCanPlay={onPause}
            ref={audioRef}
          />
        </div>
      </div>
    </div>
  );
};
