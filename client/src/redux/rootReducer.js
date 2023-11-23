import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import signupReducer from "./signup/signupReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  user: userReducer,
});

export default rootReducer;
