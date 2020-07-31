import {
  SET_RIGHT_ANSWER,
  SET_CURRENT_HERO,
  DECREMENT_MAX_POINTS,
  INCREMENT_SCORE,
  NEXT_STEP,
  SET_SELECTED_ITEMS,
} from "./actions";

const initialState = {
  rightAnswer: Math.floor(Math.random() * 6),
  selectedRightAnswer: false,
  selectedItems: [],
  currentHero: null,
  maxPoints: 5,
  score: 0,
  step: 0,
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RIGHT_ANSWER:
      return {
        ...state,
        selectedRightAnswer: action.payload,
        score: state.score + state.maxPoints,
      };
    case SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
        maxPoints: state.maxPoints - 1,
      };
    case SET_CURRENT_HERO:
      return {
        ...state,
        currentHero: action.payload,
      };
    case NEXT_STEP:
      return {
        ...initialState,
        step: state.step + 1,
        score: state.score,
        rightAnswer: action.payload,
      };
    // case DECREMENT_MAX_POINTS:
    //   return {
    //     ...state,
    //     maxPoints: state.maxPoints - 1,
    //   };
    // case INCREMENT_SCORE:
    //   return {
    //     ...state,
    //     score: state.score + state.maxPoints,
    //   };
    // case INCREMENT_STEP:
    //   return {
    //     ...state,
    //     step: state.step + 1,
    //   };
    default:
      return state;
  }
};
