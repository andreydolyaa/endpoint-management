import WebSocket from "ws";
import { messageTypes as action } from "../constants/constants.js";
import Session from "../session/session.js";
import os from "os";

// console.log(os.version());
console.log(os.freemem());

class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.webSocketClient = new WebSocket(this.url);
    this.setupEventListeners();
  }
  setupEventListeners() {
    this.webSocketClient.on(action.OPEN, this.connectionOpen);
    this.webSocketClient.on(action.CLOSE, this.connectionClose);
    this.webSocketClient.on(action.MESSAGE, this.handleIncomingMessage);
  }
  connectionOpen() {
    console.log("Websocket connection opened to: ", this.url);
  }
  connectionClose() {
    console.log("Websocket connection closed from: ", this.url);
  }
  handleIncomingMessage(data) {
    const message = JSON.parse(data);
    const { type } = message;

    if (type === action.ERROR) {
      console.log(message.message);
    } else if (type === action.SESSION) {
      Session.store = message.sessionId;
    }
  }
  send(message) {
    if (this.webSocketClient.readyState === WebSocket.OPEN) {
      this.webSocketClient.send(JSON.stringify(message));
    } else {
      console.error("Websocket connection not ready");
    }
  }
  sendDeviceIdentifier() {

  }
}

export default WebSocketClient;
