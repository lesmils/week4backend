const { Router } = require("express");
const router = new Router();

const user = require("../models").user;
const product = require("../models").product;
const category = require("../models").category;

//All Categories, include products
router.get("/", async (req, res) => {
  const allCategories = await category.findAll({
    include: [product],
  });
  ``;

  res.send(allCategories);
});

//Get specific category by ID, include category
router.get("/:id", async (req, res) => {
  const categoryById = await category.findByPk(req.params.id, {
    include: [{ model: product }],
  });

  if (categoryById === null) {
    res.status(404).send(`Category with ID ${req.params.id} does not exist`);
  }

  res.send(categoryById);
});

module.exports = router;
