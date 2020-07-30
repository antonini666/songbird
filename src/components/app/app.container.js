import React from "react";
import { App } from "./app";
import { useSelector } from "react-redux";

export const AppContainer = () => {
  const state = useSelector(({ classes }) => ({
    step: classes.step,
    heroClasses: classes.heroClasses,
  }));

  return <App step={state.step} heroClasses={state.heroClasses} />;
};
