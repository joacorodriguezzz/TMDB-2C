const express = require("express");
const User = require("../models/users");
const UserRouter = express.Router();

UserRouter.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  User.create(email, username, password)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
});

module.exports = UserRouter;
