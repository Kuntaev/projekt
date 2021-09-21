import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import captainReducer from "./features/captain";

export const store = createStore(
  combineReducers({
      captain: captainReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
