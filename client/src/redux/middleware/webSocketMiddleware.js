import { WEBSOCKET_SERVER_URL } from "../../baseUrl";
import * as wsType from "../websocket/webSocketTypes";

export const webSocketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case wsType.WEBSOCKET_CONNECT:
      store.socket = new WebSocket(WEBSOCKET_SERVER_URL);

      store.socket.onopen = () => {
        store.dispatch({ type: wsType.WEBSOCKET_CONNECTED });
      };

      store.socket.onmessage = (event) => {
        store.dispatch({
          type: wsType.WEBSOCKET_MESSAGE_RECEIVED,
          payload: event.data,
        });
      };

      store.socket.onclose = () => {
        store.dispatch({ type: wsType.WEBSOCKET_DISCONNECTED });
      };
      break;

    case wsType.WEBSOCKET_SEND:
      if (store.socket && store.socket.readyState === WebSocket.OPEN) {
        store.socket.send(action.payload);
      } else {
        console.error("[middleware] Websocket connection not open (EMR)");
      }
      break;

    case wsType.WEBSOCKET_DISCONNECT:
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
