const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "todoList",
  password: "tuvaWW2022",
});

module.exports = pool.promise();
