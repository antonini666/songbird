export const HEROES_LOADED = "HEROES_LOADED";
export const HEROES_ERROR = "HEROES_ERROR";

export const heroesLoaded = (heroes) => ({
  type: HEROES_LOADED,
  payload: heroes,
});

export const heroesError = (error) => ({
  type: HEROES_ERROR,
  payload: error,
});
