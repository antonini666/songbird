import {
  SET_RIGHT_ANSWER,
  SET_CURRENT_HERO,
  NEXT_STEP,
  SET_SELECTED_ITEMS,
  RESET_GAME,
  PLAY_AUDIO,
} from "./actions";

const initialState = {
  rightAnswer: Math.floor(Math.random() * 6),
  isCorrectAnswer: false,
  isAudioPlay: true,
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
        isCorrectAnswer: action.payload,
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
    case PLAY_AUDIO:
      return {
        ...state,
        isAudioPlay: action.payload,
      };
    case RESET_GAME:
      return {
        ...initialState,
        rightAnswer: action.payload,
      };
    default:
      return state;
  }
};
