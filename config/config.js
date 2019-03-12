require("dotenv").config();

var username = process.env.DB_USER;
var password = process.env.DB_PASS;
var database = process.env.DB_NAME
var host = process.env.DB_HOST;

module.exports = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: "mysql"
  },
  production: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: "mysql"
  }
};