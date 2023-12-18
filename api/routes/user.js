const express = require("express");
const User = require("../models/users");
const UserRouter = express.Router();

UserRouter.post("/register", (req, res) => {
  console.log('ACAAAA', req.body.email, req.body.password);
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    email: email,
    username: username,
    password: password
  })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => {
      console.log("ERROR", error);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = UserRouter;

