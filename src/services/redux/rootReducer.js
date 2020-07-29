import { combineReducers } from "redux";

import { heroClassesReducer } from "./hero-classes/reducer";

export const rootReducer = combineReducers({
  classes: heroClassesReducer,
});
