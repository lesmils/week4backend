const { Router } = require("express");
const router = new Router();
const bcrypt = require("bcrypt");

const user = require("../models").user;
const product = require("../models").product;
const category = require("../models").category;

//create new account
router.post("/", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    if (!email || !password || !name) {
      res.status(400).send("Please provide a email, name and password");
    } else {
      const newUser = await user.create({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 12),
      });
      res.send(newUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

module.exports = router;
