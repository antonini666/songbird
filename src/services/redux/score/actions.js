export const SET_RIGHT_ANSWER = "SET_RIGHT_ANSWER";
export const SET_CURRENT_HERO = "SET_CURRENT_HERO";
export const DECREMENT_MAX_POINTS = "DECREMENT_MAX_POINTS";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const NEXT_STEP = "NEXT_STEP";
export const SET_SELECTED_ITEMS = "SET_SELECTED_ITEMS";

export const setRightAnswer = (id) => ({
  type: SET_RIGHT_ANSWER,
  payload: id,
});

export const decrementMaxPoints = () => ({
  type: DECREMENT_MAX_POINTS,
});

export const incrementScore = () => ({
  type: INCREMENT_SCORE,
});

export const nextStep = () => ({
  type: NEXT_STEP,
  payload: Math.floor(Math.random() * 6),
});

export const setCurrentHero = (hero) => ({
  type: SET_CURRENT_HERO,
  payload: hero,
});

export const setSelectedItems = (id) => ({
  type: SET_SELECTED_ITEMS,
  payload: id,
});
