import { combineReducers } from "redux";

import { heroClassesReducer } from "./hero-classes/reducers";

export const rootReducer = combineReducers({
  classes: heroClassesReducer,
});
