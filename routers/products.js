const { Router } = require("express");
const router = new Router();

const user = require("../models").user;
const product = require("../models").product;
const category = require("../models").category;

//All Products, include products
router.get("/", async (req, res) => {
  const allProducts = await product.findAll({
    include: [category],
  });

  res.send(allProducts);
});

//Get specific product by ID, include product
router.get("/:id", async (req, res) => {
  const productById = await product.findByPk(req.params.id, {
    include: [{ model: category, attributes: ["title"] }],
  });

  if (productById === null) {
    res.status(404).send(`product with ID ${req.params.id} does not exist`);
  }

  res.send(productById);
});

module.exports = router;
