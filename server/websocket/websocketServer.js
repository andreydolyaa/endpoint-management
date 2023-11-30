import { v4 as uuidv4 } from "uuid";
import { WebSocketServer } from "ws";
import { webSocketActions as action } from "./webSocketConstants.js";
import { handleIncomingWebSocketMessages } from "./webSocketIncomingMessages.js";
import { setDisconnected } from "../modules/devices/device.js";
import { praseJsonString } from "../utils/index.js";

class WsServer {
  constructor(server) {
    this.wss = new WebSocketServer({ server, path: "/ws" });
    this.setupWebSocket();
    this.clients = {};
  }
  setupWebSocket() {
    console.log("Websocket server started");
    this.wss.on(action.CONNECTION, (socket) => {
      this.handleConnectionOpen(socket);
      socket.on(action.MESSAGE, (message) =>
        this.handleIncomingMessage(message, socket)
      );
      socket.on(action.ERROR, (error) => this.handleError(error, socket));
      socket.on(action.CLOSE, () => this.handleConnectionClose(socket));
    });
  }
  handleConnectionOpen(socket) {
    const sessionId = uuidv4();
    this.clients[sessionId] = socket;
    this.logConnectionsStatus(sessionId, true);
    this.send(socket, { type: "session", sessionId });
  }
  handleIncomingMessage(message, socket) {
    const incoming = praseJsonString(message);
    const sessions = Object.keys(this.clients) || [];
    // TODO: handle message validation and sanitazation
    if (!incoming.sessionId || !sessions.includes(incoming.sessionId)) {
      this.send(socket, {
        type: "error",
        message: "Failed to identify session!",
      });
      socket.close();
      return;
    }
    console.log(
      `Incoming message from: ${incoming?.deviceIdentifier} [${incoming.sessionId}]`
    );
    handleIncomingWebSocketMessages(incoming);
  }
  handleError(error) {
    console.log(error);
    socket.close();
    return;
  }
  async handleConnectionClose(socket) {
    const sessionId = this.findSession(socket);
    delete this.clients[sessionId];
    this.logConnectionsStatus(sessionId, false);
    await setDisconnected(sessionId);
  }
  findSession(socket) {
    for (const sessionId in this.clients) {
      if (this.clients[sessionId] === socket) return sessionId;
    }
    return null;
  }
  logConnectionsStatus(sessionId, connection) {
    const msg = connection ? "Connected" : "Disconnected";
    console.log(
      `Client ${msg} [Session-ID: ${sessionId}] | ${
        Object.keys(this.clients).length
      } client(s) connected`
    );
  }
  send(socket, message) {
    const msg = JSON.stringify(message);
    if (socket) socket.send(msg);
    else Object.values(this.clients).forEach((client) => client.send(msg));
  }
  sendMessage(sessionId, message) {
    const msg = JSON.stringify({ type: "message", message });
    const socket = this.clients[sessionId];
    socket.send(msg);
  }
}

export default WsServer;
