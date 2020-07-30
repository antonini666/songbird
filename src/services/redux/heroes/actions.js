export const HEROES_LOADED = "HEROES_LOADED";
export const SET_CURRENT_HERO = "SET_CURRENT_HERO";
export const NEXT_STEP = "NEXT_STEP";

export const heroesLoaded = (heroes) => ({
  type: HEROES_LOADED,
  payload: heroes,
});

export const setCurrentHero = (hero) => ({
  type: SET_CURRENT_HERO,
  payload: hero,
});

export const nextStep = () => ({
  type: NEXT_STEP,
});
