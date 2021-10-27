import initialState from "./state";
import { SET_USER_LOGGED } from "./types";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGGED:
      return { ...state, value: action.payload, loaded: true };
    default:
      return state;
  }
};

export default userReducer;
