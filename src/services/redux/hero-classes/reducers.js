import { HERO_CLASSES_LOADED } from "./actions";

const initialState = {
  heroClasses: [],
  loading: true,
  step: 0,
};

export const heroClassesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO_CLASSES_LOADED:
      return {
        ...state,
        heroClasses: action.payload,
        loading: false,
      };

    default: {
      return state;
    }
  }
};
