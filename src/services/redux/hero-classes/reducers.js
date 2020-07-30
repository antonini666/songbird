import { HERO_CLASSES_LOADED, INCREMENT_STEP } from "./actions";

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
    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    default: {
      return state;
    }
  }
};
