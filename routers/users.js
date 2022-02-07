const { Router } = require("express");
const router = new Router();

const user = require("../models").user;
const product = require("../models").product;
const category = require("../models").category;

module.exports = router;
