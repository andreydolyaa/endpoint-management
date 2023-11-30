import * as wsType from "./webSocketTypes";

export const connectWebSocket = () => ({
  type: wsType.WEBSOCKET_CONNECT,
});

export const disconnectWebSocket = () => ({
  type: wsType.WEBSOCKET_DISCONNECT,
});

export const sendWebSocketMessage = (message) => ({
  type: wsType.WEBSOCKET_SEND,
  payload: message,
});

export const receiveWebSocketMessage = (message) => ({
  type: wsType.WEBSOCKET_MESSAGE_RECEIVED,
  payload: message,
});
