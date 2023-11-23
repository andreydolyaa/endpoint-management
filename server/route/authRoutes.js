import express from "express";
import { handleSignIn, handleSignUp } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/signin", handleSignIn);

export default router;
