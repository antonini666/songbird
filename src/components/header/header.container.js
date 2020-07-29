import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroClassesLoaded } from "../../services/redux/hero-classes/actions";
import { DotaService } from "../../services/api/dota-service";
import { Header } from "./header";

const dotaService = new DotaService();

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ classes }) => {
    return {
      classes: classes.heroClasses,
      step: classes.step,
      loading: classes.loading,
    };
  });

  useEffect(() => {
    dotaService.getHeroClasses().then((data) => {
      dispatch(heroClassesLoaded(data));
    });
  }, [dispatch]);

  return (
    <Header classes={state.classes} step={state.step} loading={state.loading} />
  );
};
