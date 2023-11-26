import express from "express";
import dotenv from "dotenv";
import { websocketClient } from "./src/websocket/client.js";
import Session from "./src/session/session.js";
import { messageTypes } from "./src/constants/constants.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8888;


// Temporary testing
// TODO: implement in a class
websocketClient.on("open", () => {
  console.log("Connection opened");
});

websocketClient.on("close", () => {
  console.log("Connection closed");
});

// To send message sessionId must be provided!
websocketClient.on("message", (data) => {
  const message = JSON.parse(data);
  const { type } = message;
  if (type === messageTypes.ERROR) {
    console.log(message.message);
  } else if (type === messageTypes.SESSION) {
    Session.saveSessionId(message.sessionId);
  }
});

setTimeout(() => {
  websocketClient.send(
    JSON.stringify({ x: "sadasd", sessionId: Session.getSessionId() })
  );
}, 1000);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
