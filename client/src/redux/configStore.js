import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {myTeam} from "./features/myTeam"
import { team } from './features/Team';
import captainReducer from './features/captain';

export const store = createStore(
  combineReducers({
    team:team,
    captain: captainReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
