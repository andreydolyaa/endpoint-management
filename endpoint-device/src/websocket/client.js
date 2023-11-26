import WebSocket from "ws";
import dotenv from "dotenv";

dotenv.config();

const commandCenterUrl = `ws://${process.env.COMMAND_CENTER_HOST}:${process.env.COMMAND_CENTER_PORT}/ws`;
export const websocketClient = new WebSocket(commandCenterUrl);
