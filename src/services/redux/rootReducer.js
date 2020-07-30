import { combineReducers } from "redux";

import { heroClassesReducer } from "./hero-classes/reducers";
import { heroesReducer } from "./heroes/reducers";

export const rootReducer = combineReducers({
  classes: heroClassesReducer,
  heroes: heroesReducer,
});
