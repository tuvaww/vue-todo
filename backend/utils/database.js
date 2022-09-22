const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "todoList",
  password: "tuvaWW2022",
});

module.exports = pool.promise();
