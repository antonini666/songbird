import { HEROES_LOADED, HEROES_ERROR } from "./actions";

const initialState = {
  heroes: [],
  loading: true,
  error: null,
};

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEROES_LOADED:
      return {
        ...state,
        heroes: action.payload,
        loading: false,
      };
    case HEROES_ERROR:
      return {
        heroes: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
