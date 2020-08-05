import React from "react";
import AudioPlayer from "react-h5-audio-player";

import QuestionMark from "../../assets/image/question-mark.png";
import "./hero-audio.scss";
import "./hero-bar.scss";

//onPlay redux -> onPlay

export const HeroBar = ({
  isCorrectAnswer,
  hero,
  onPause,
  audioRef,
  isAudioPlay,
}) => {
  return (
    <div className="hero-bar">
      <div className="hero-bar__image">
        <img src={!isCorrectAnswer ? QuestionMark : hero.image} alt="hero" />
      </div>
      <div className="hero-bar__container">
        <div className="hero-bar__name">
          {isCorrectAnswer ? hero.name : "******"}
        </div>
        <div className="hero-bar__audio">
          <AudioPlayer
            src={hero.audio}
            showJumpControls={false}
            onPlay={!isAudioPlay ? onPause() : null}
            onCanPlay={onPause}
            ref={audioRef}
          />
        </div>
      </div>
    </div>
  );
};
