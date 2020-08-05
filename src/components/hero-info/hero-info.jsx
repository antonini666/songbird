import React from "react";
import AudioPlayer from "react-h5-audio-player";

import "./hero-info.scss";

export const HeroInfo = ({currentHero, audioRef, onPause}) => {
  return (
    <div className="hero-info">
      {!currentHero ? (
        <p className="instruction">
          <span>Listen to the player.</span>
          <span>Select a hero from the list</span>
        </p>
      ) : (
        <React.Fragment>
          <div className="hero-info__top">
            <div className="hero-info__image">
              <img src={currentHero.image} alt="hero" />
            </div>
            <div className="hero-info__sidebar">
              <div className="hero-info__name">{currentHero.name}</div>
              <div className="hero-info__surname">{currentHero.fullName}</div>
              <div className="hero-info__audio">
                <AudioPlayer
                  ref={audioRef}
                  src={currentHero.audio}
                  showJumpControls={false}
                  onCanPlay={onPause}
                />
              </div>
            </div>
          </div>
          <div className="hero-info__description">
            {currentHero.description}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
