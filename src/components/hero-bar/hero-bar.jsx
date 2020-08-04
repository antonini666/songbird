import React from "react";
import AudioPlayer from "react-h5-audio-player";

import QuestionMark from "../../assets/image/question-mark.png";
import "./hero-audio.scss";
import "./hero-bar.scss";

export const HeroBar = ({ selectedRightAnswer, hero, onPause, audioRef }) => {
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
