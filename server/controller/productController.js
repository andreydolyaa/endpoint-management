import { Product } from "../model/productModel.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    if (products.length < 1) throw new Error("No products found");
    res.status(200).send(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addProduct = async (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    await product.save();
    res.status(201).send({
      message: `Product added successfully: ${product}`,
    });
  } catch (error) {
    res.status(400).send({ message: "Failed to add product" });
  }
};
