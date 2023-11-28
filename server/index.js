import fs from "fs";
import dotenv from "dotenv";
import https from "https";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cookieParser from "cookie-parser";
import Database from "./config/database.js";
import authRoutes from "./route/authRoutes.js";
import productRoutes from "./route/productRoutes.js";
import refreshTokenRoute from "./route/refreshTokenRoute.js";
import { globalErrorHandler } from "./middleware/error/globalError.js";
import { invalidPathHandler } from "./middleware/error/invalidPath.js";
import { verifyToken } from "./middleware/auth/verifyToken.js";
import { credentials } from "./middleware/auth/credentials.js";
import { corsOptions } from "./config/corsOptions.js";
import WebSocketServer from "./websocket/websocketServer.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serverOptions = {
  key: fs.readFileSync(new URL("certs/emr.test.key", import.meta.url)),
  cert: fs.readFileSync(new URL("certs/emr.test.crt", import.meta.url)),
};

const app = express();
const server = https.createServer(serverOptions, app);
const wsServer = new WebSocketServer(server);

const PORT = process.env.PORT || 3005;
const HOST = process.env.HOST || "localhost";
const db = new Database(`${process.env.MONGODB_URI}/auth-project-db`);

db.connect().catch((err) => {
  console.error("Error connection to database", err);
});

app.use(credentials); // for cors
app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/refresh", refreshTokenRoute);

app.use("/products", verifyToken, productRoutes);

app.use(globalErrorHandler);
app.use(invalidPathHandler);

process.on("SIGINT", async () => {
  try {
    await db.disconnect();
    console.log("Disconnected from database");
    server.close(() => {
      console.log("HTTP server closed");
      process.exit(0);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

server.listen(PORT, HOST, () =>
  console.log(`Server running on port https://${HOST}:${PORT}`)
);
