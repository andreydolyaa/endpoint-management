import express from "express";
import {
  handleSignIn,
  handleSignOut,
  handleSignUp,
} from "../controller/authController.js";

const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/signin", handleSignIn);
router.get("/signout", handleSignOut);

export default router;
