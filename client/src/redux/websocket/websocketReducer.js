import * as types from "./webSocketTypes";

const initialState = {
  messages: [],
  isConnected: false,
};

const websocketReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.WEBSOCKET_MESSAGE_RECEIVED:
      console.log("Message Received: Payload: ", payload);
    case types.WEBSOCKET_CONNECTED:
      return { ...state, isConnected: true };
    case types.WEBSOCKET_DISCONNECTED:
      return { ...state, isConnected: false };
    default:
      return state;
  }
};

export default websocketReducer;
