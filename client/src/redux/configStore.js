import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { team } from './features/Team';

export const store = createStore(
  combineReducers({
    team:team
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
