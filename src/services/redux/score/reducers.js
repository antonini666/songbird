import { HEROES_LOADED } from "./actions";

const initialState = {
  heroes: [],
  loading: true,
  currentHero: null,
  rightAnswer: Math.floor(0 + Math.random() * (5 + 1 - 0)),
  score: 0,
  maxAnswerCount: 5,
};

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEROES_LOADED:
      return {
        ...state,
        heroes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
