// const bcrypt = require("bcrypt");
const S = require("sequelize");
const db = require("../configs/db");

class User extends S.Model {}

// const salt = bcrypt.genSaltSync();
// console.log("salt", salt);

// encryptPassword("joaquinkpo", salt);

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
    },
    username: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
