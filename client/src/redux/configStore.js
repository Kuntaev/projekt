import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {myTeam} from "./features/myTeam"
import { team } from './features/team';
import captainReducer from './features/captain';
import { eventsReducer } from './features/event';

export const store = createStore(
  combineReducers({
    team:team,
    captain:captainReducer,
    events:eventsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
