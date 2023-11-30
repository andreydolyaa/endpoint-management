import { WEBSOCKET_SERVER_URL } from "../../baseUrl";
import * as types from "../websocket/webSocketTypes";

export const webSocketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case types.WEBSOCKET_CONNECT:
      store.socket = new WebSocket(`${WEBSOCKET_SERVER_URL}?identifier=UI`);

      store.socket.onopen = () => {
        store.dispatch({ type: types.WEBSOCKET_CONNECTED });
      };

      store.socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === "DEVICE_UPDATE") {
          store.dispatch({ type: "DEVICE_UPDATE", payload: message.data });
        }
        // store.dispatch({
        //   type: types.WEBSOCKET_MESSAGE_RECEIVED,
        //   payload: JSON.parse(event.data),
        // });
      };

      store.socket.onclose = () => {
        store.dispatch({ type: types.WEBSOCKET_DISCONNECTED });
      };
      break;

    case types.WEBSOCKET_SEND:
      if (store.socket && store.socket.readyState === WebSocket.OPEN) {
        store.socket.send(JSON.stringify(action.payload));
      } else {
        console.error("[middleware] Websocket connection not open (EMR)");
      }
      break;

    case types.WEBSOCKET_DISCONNECT:
      if (store.socket) {
        store.socket.close();
      }
      break;

    default:
      break;
  }

  return next(action);
};

export default webSocketMiddleware;
