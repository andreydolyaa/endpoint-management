import dotenv from "dotenv";
import WebSocketClient from "./src/websocket/webSocketClient.js";

dotenv.config();

const commandCenterUrl = `ws://${process.env.COMMAND_CENTER_HOST}:${process.env.COMMAND_CENTER_PORT}/ws`;
export const websocketClient = new WebSocketClient(commandCenterUrl);
