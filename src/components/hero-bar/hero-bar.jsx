import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import QuestionMark from "../../assets/image/question-mark.png";

import "./hero-bar.scss";

export const HeroBar = () => {
  const audioRef = useRef(null);

  // const onButtonClick = () => {
  //   audio.current.audio.current.pause();
  // };

  return (
    <div className="hero-bar">
      <div className="hero-bar__image">
        <img src={QuestionMark} alt="hero" />
      </div>
      <div className="hero-bar__audio">
        <AudioPlayer
          src="https://gamepedia.cursecdn.com/dota2_gamepedia/a/a6/Vo_antimage_anti_kill_12.mp3"
          showJumpControls={false}
          ref={audioRef}
        />
      </div>
    </div>
  );
};
