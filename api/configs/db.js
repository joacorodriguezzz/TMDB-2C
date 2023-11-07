const Sequelize = require("sequelize");

const db = new Sequelize("my_db", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
