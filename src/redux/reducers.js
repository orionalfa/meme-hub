import { combineReducers } from "redux";
import userReducer from "./userData/reducer";

const reducers = combineReducers({
  userReducer: userReducer,
});

export default reducers;
