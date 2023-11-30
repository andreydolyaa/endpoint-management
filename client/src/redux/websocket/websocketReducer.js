import * as wsType from "./webSocketTypes";

const initialState = {
  messages: [],
  isConnected: false,
};

const websocketReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case wsType.WEBSOCKET_MESSAGE_RECEIVED:
      console.log(payload, "Message Received: Payload: ", payload);

    case wsType.WEBSOCKET_CONNECTED:
      console.log("XXXXXXXXXXXXX");
      return { ...state, isConnected: true };
    case wsType.WEBSOCKET_DISCONNECTED:
      return { ...state, isConnected: false };
    default:
      return state;
  }
};

export default websocketReducer;
