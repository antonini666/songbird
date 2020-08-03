import React, { useRef } from "react";
import { useSelector } from "react-redux";

import { HeroInfo } from "./hero-info";

export const HeroInfoContainer = () => {
  const currentHero = useSelector(({ score }) => score.currentHero);
  const audioRef = useRef(null);

  const onPause = () => {
    audioRef.current.audio.current.pause();
  };

  return (
    <HeroInfo currentHero={currentHero} audioRef={audioRef} onPause={onPause} />
  );
};
