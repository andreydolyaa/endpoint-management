import express from "express";
import { addProduct, getProducts } from "../controller/productController.js";

const router = express.Router();

router.route("/")
  .post(addProduct)
  .get(getProducts);

export default router;
