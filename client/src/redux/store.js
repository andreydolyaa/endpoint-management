import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { webSocketMiddleware } from "./middleware/webSocketMiddleware";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, webSocketMiddleware)
);

export default store;
