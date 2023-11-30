import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import signupReducer from "./signup/signupReducer";
import toastReducer from "./toast/toastReducer";
import deviceReducer from "./devices/deviceReducer";
import websocketReducer from "./websocket/websocketReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  user: userReducer,
  toast: toastReducer,
  devices: deviceReducer,
  socket: websocketReducer,
});

export default rootReducer;
