const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const todoRoutes = require("./routes/todoRoutes");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(todoRoutes);
try {
  app.listen(3000);
} catch (err) {
  console.log(err);
}
