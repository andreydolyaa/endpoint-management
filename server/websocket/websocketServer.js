import { v4 as uuidv4 } from "uuid";
import { WebSocketServer } from "ws";
import { webSocketActions as action } from "./webSocketConstants.js";

class WsServer {
  constructor(server) {
    this.wss = new WebSocketServer({ server, path: "/ws" });
    this.setupWebSocket();
    this.clients = {};
  }
  setupWebSocket() {
    console.log("Websocket server started");
    this.wss.on(action.CONNECTION, (socket) => {
      this.connection(socket);
      socket.on(action.MESSAGE, (message) => this.onmessage(message, socket));
      socket.on(action.ERROR, (error) => this.onerror(error, socket));
      socket.on(action.CLOSE, () => this.onclose(socket));
    });
  }
  connection(socket) {
    const sessionId = uuidv4();
    this.clients[sessionId] = socket;
    this.logConnectionsStatus(sessionId, true);
    this.send(socket, { type: "session", sessionId });
  }
  onmessage(message, socket) {
    const incoming = JSON.parse(message);
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
    console.log(`Incoming Message: ${message}`);
  }
  onerror(error) {
    console.log(error);
    socket.close();
    return;
  }
  onclose(socket) {
    const sessionId = this.findSession(socket);
    delete this.clients[sessionId];
    this.logConnectionsStatus(sessionId, false);
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
}

export default WsServer;
