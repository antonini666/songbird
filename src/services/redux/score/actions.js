export const SET_RANDOM_HERO_ANSWER = "SET_RANDOM_HERO_ANSWER";
export const SET_RIGHT_ANSWER = "SET_RIGHT_ANSWER";
export const DECREMENT_MAX_POINTS = "DECREMENT_MAX_POINTS";

export const setRandomHeroAnswer = () => ({
  type: SET_RANDOM_HERO_ANSWER,
  payload: Math.floor(1 + Math.random() * (5 + 1 - 1)),
});

export const setRightAnswer = (id) => ({
  type: SET_RIGHT_ANSWER,
  payload: id,
});

export const decrementMaxPoints = () => ({
  type: DECREMENT_MAX_POINTS,
});
