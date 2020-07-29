import { HERO_CLASSES_LOADED } from "../actions/";

const initialState = {
  heroClasses: [],
  loading: true,
};

export const heroClassesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO_CLASSES_LOADED:
      return {
        heroClasses: action.payload,
      };

    default: {
      return state;
    }
  }
};
