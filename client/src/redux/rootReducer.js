import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import signupReducer from "./signup/signupReducer";
import toastReducer from "./toast/toastReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  user: userReducer,
  toast: toastReducer,
});

export default rootReducer;
