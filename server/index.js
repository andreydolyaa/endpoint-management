import dotenv from "dotenv";
import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
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

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocketServer(server);

const PORT = process.env.PORT || 3005;
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

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
