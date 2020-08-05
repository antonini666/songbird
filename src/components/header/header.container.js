import React from "react";
import { useSelector } from "react-redux";

import { Header } from "./header";

export const HeaderContainer = () => {
  const state = useSelector(({ heroes, score }) => {
    return {
      heroesClasses: heroes.heroes,
      step: score.step,
      loading: heroes.loading,
      score: score.score,
    };
  });

  return <Header state={state} />;
};
