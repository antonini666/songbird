import { combineReducers } from "redux";

import { heroClassesReducer } from "./hero-classes/reducers";
import { heroesReducer } from "./heroes/reducers";
import { scoreReducer } from "./score/reducers";

export const rootReducer = combineReducers({
  classes: heroClassesReducer,
  heroes: heroesReducer,
  score: scoreReducer,
});
