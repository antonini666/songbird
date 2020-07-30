import { HEROES_LOADED, SET_CURRENT_HERO } from "./actions";
import { NEXT_STEP } from "../score/actions";

const initialState = {
  heroes: [],
  loading: true,
  currentHero: null,
};

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEROES_LOADED:
      return {
        ...state,
        heroes: action.payload,
        loading: false,
      };
    case SET_CURRENT_HERO:
      return {
        ...state,
        currentHero: action.payload,
      };
    case NEXT_STEP:
      return {
        ...state,
        currentHero: initialState.currentHero,
      };
    default:
      return state;
  }
};
