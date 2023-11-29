import express from "express";
import { getDevices } from "../controller/deviceController.js";

const router = express.Router();

router
  .route("/")
  .get(getDevices);

export default router;
