import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {mainReducer} from "./reducers/mainReducer";

// Combine reducers
const rootReducer = combineReducers({
  mainReducer
});
  
const middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  middleware
);
  
export default store;