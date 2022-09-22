const Todo = require("../models/Todo");

exports.getTodos = (req, res) => {
  Todo.fetchAll()
    .then(([rows]) => {
      console.log("res", rows);
      res.status(200).send(rows);
    })
    .then()
    .catch((err) => console.log("error", err));
};
