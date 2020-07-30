import {
  SET_RANDOM_HERO_ANSWER,
  SET_RIGHT_ANSWER,
  DECREMENT_MAX_POINTS,
} from "./actions";

const initialState = {
  rightAnswer: Math.floor(1 + Math.random() * (5 + 1 - 1)),
  score: 0,
  selectedRightAnswer: false,
  maxPints: 5,
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_HERO_ANSWER:
      return {
        ...state,
        rightAnswer: action.payload,
      };
    case SET_RIGHT_ANSWER:
      return {
        ...state,
        selectedRightAnswer: action.payload === state.rightAnswer,
      };
    case DECREMENT_MAX_POINTS:
      return {
        ...state,
        maxPints: state.maxPints - 1,
      };
    default:
      return state;
  }
};
