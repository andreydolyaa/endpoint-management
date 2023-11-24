import express from "express";
import { addProduct, getProducts } from "../controller/productController.js";
import { verifyRoles } from "../middleware/auth/verifyRoles.js";
import { userRoles as role } from "../config/userRoles.js";

const router = express.Router();

router.route("/")
  .get(getProducts)
  .post(verifyRoles(role.ADMIN), addProduct);

export default router;
