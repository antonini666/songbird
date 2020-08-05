import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DotaService } from "../../services/api/dota-service";
import { heroesLoaded, heroesError } from "../../services/redux/heroes/actions";
import { App } from "./app";

const dotaService = new DotaService();

export const AppContainer = () => {
  const dispatch = useDispatch();
  const step = useSelector(({ score }) => score.step);

  useEffect(() => {
    dotaService
      .getAllHero()
      .then((heroes) => dispatch(heroesLoaded(heroes)))
      .catch((error) => dispatch(heroesError(error)));
  }, [dispatch]);

  return <App step={step} />;
};
