import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { team } from "./features/team";
import captainReducer from "./features/captain";
import { eventsReducer } from "./features/event";
import { player } from "./features/player";

export const store = createStore(
  combineReducers({
    team: team,
    captain: captainReducer,
    event: eventsReducer,
    player: player,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
