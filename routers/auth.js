const { Router } = require("express");
const { user } = require("../models");
const { toJWT, toData } = require("../Auth/jwt");
const bcrypt = require("bcrypt");

const router = new Router();

//Login Route
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).send("no email or password provided");
  } else {
    const authUser = await user.findOne({
      where: { email: email },
    });

    if (!authUser) {
      res.status(400).send("User not found");
    } else {
      if (bcrypt.compareSync(password, authUser.password)) {
        const authToken = toJWT({
          userId: authUser.id,
          userName: authUser.name,
        });
        res.send(authToken);
      } else {
        res.send("Invalid Login.");

        //Add forgot password?
      }
    }
  }
});

module.exports = router;
