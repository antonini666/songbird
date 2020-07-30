import {
  SET_RANDOM_HERO_ANSWER,
  SET_RIGHT_ANSWER,
  DECREMENT_MAX_POINTS,
  INCREMENT_SCORE,
  NEXT_STEP,
} from "./actions";

const initialState = {
  rightAnswer: Math.floor(1 + Math.random() * (5 + 1 - 1)),
  score: 0,
  selectedRightAnswer: false,
  maxPoints: 5,
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
        selectedRightAnswer: action.payload,
      };
    case DECREMENT_MAX_POINTS:
      return {
        ...state,
        maxPoints: state.maxPoints - 1,
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + state.maxPoints,
      };
    case NEXT_STEP:
      return {
        ...initialState,
        score: state.score,
      };
    default:
      return state;
  }
};
