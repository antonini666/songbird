import { combineReducers } from "redux";

import { heroesReducer } from "./heroes/reducers";
import { scoreReducer } from "./score/reducers";

export const rootReducer = combineReducers({
  heroes: heroesReducer,
  score: scoreReducer,
});
