import express from "express";
import { handleSignIn, handleSignUp } from "../controller/authController.js";
import { generateAccessToken } from "../middleware/auth/generateAccessToken.js";
import { generateRefreshToken } from "../middleware/auth/generateRefreshToken.js";

const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/signin", handleSignIn, generateAccessToken, generateRefreshToken);

export default router;
