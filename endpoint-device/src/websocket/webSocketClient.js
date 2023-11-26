import WebSocket from "ws";
import { messageTypes as action } from "../constants/constants.js";
import Session from "../session/session.js";
import Device from "../device/device.js";
import { sleep } from "../utils/index.js";

class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.webSocketClient = null;
    this.attempts = 0;
    this.reconnectTime = 3000;
    this.handleIncomingMessage = this.handleIncomingMessage.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleConnectionClose = this.handleConnectionClose.bind(this);
    this.setupWebsocket();
  }
  setupWebsocket() {
    this.webSocketClient = new WebSocket(this.url);
    this.setupEventListeners();
  }
  setupEventListeners() {
    this.webSocketClient.on(action.OPEN, this.handleConnectionOpen);
    this.webSocketClient.on(action.CLOSE, this.handleConnectionClose);
    this.webSocketClient.on(action.MESSAGE, this.handleIncomingMessage);
    this.webSocketClient.on(action.ERROR, this.handleError);
  }
  handleConnectionOpen() {
    this.attempts = 0;
    console.log("Websocket connection opened to: ", this.url);
  }
  handleConnectionClose() {
    console.log("Websocket connection closed from: ", this.url);
    this.reconnect();
  }
  handleError(error) {
    console.log("Websocket connection failed: ", error.code);
  }
  async reconnect() {
    this.attempts++;
    console.log(
      `Trying to reconnect to... ${this.url} [Attempt ${this.attempts}]`
    );
    await sleep(this.reconnectTime);
    this.setupWebsocket();
  }
  handleIncomingMessage(data) {
    const message = JSON.parse(data);
    if (message.type === action.ERROR) {
      console.log(message.message);
    } else if (message.type === action.SESSION) {
      Session.store = message.sessionId;
      this.sendInitMessage();
    }
  }
  send(message) {
    if (this.webSocketClient.readyState === WebSocket.OPEN) {
      this.webSocketClient.send(message);
    } else {
      console.error("Websocket connection not ready");
    }
  }
  sendInitMessage() {
    this.send(
      JSON.stringify({
        device: Device.getDeviceIdentifier,
        sessionId: Session.retrieve,
      })
    );
  }
}

export default WebSocketClient;