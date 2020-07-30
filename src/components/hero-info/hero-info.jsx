import React from "react";
import AudioPlayer from "react-h5-audio-player";
import QuestionMark from "../../assets/image/question-mark.png";

import "./hero-info.scss";

export const HeroInfo = () => {
  return (
    <div className="hero-info">
      {/* <p className="instruction">
        <span>Listen to the player.</span>
        <span>Select a hero from the list</span>
      </p> */}
      <div className="hero-info__top">
        <div className="hero-info__image">
          <img src={QuestionMark} alt="hero" />
        </div>
        <div className="hero-info__sidebar">
          <div className="hero-info__name">1241</div>
          <div className="hero-info__surname">1231</div>
          <div className="hero-info__audio">
            <AudioPlayer
              src="https://gamepedia.cursecdn.com/dota2_gamepedia/a/a6/Vo_antimage_anti_kill_12.mp3"
              showJumpControls={false}
            />
          </div>
        </div>
      </div>
      <div className="hero-info__description">
        Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают
        на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих
        звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь
        дуэтом.
      </div>
    </div>
  );
};
