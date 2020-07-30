import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";

import "./hero-info.scss";

export const HeroInfo = () => {
  const state = useSelector(({ heroes }) => heroes.currentHero);
  const audioRef = useRef(null);

  const onPause = () => {
    audioRef.current.audio.current.pause();
  };

  return (
    <div className="hero-info">
      {!state ? (
        <p className="instruction">
          <span>Listen to the player.</span>
          <span>Select a hero from the list</span>
        </p>
      ) : (
        <React.Fragment>
          <div className="hero-info__top">
            <div className="hero-info__image">
              <img src={state.image} alt="hero" />
            </div>
            <div className="hero-info__sidebar">
              <div className="hero-info__name">{state.name}</div>
              <div className="hero-info__surname">{state.fullName}</div>
              <div className="hero-info__audio">
                <AudioPlayer
                  ref={audioRef}
                  src={state.audio}
                  showJumpControls={false}
                  onCanPlay={onPause}
                />
              </div>
            </div>
          </div>
          <div className="hero-info__description">{state.description}</div>
        </React.Fragment>
      )}
    </div>
  );
};
