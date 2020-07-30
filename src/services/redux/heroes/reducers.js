import { HEROES_LOADED, SET_CURRENT_HERO } from "./actions";

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
    default:
      return state;
  }
};
