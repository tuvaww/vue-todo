const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

app.use(cors());

app.use(todoRoutes);
try {
  app.listen(3000);
} catch (err) {
  console.log(err);
}
