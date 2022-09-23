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

exports.postTodos = (req, res) => {
  console.log(req.body.title);
  const title = req.body.title;
  const date = req.body.date;
  const isDone = req.body.isDone;

  const todo = new Todo(null, title, date, isDone);
  todo
    .save()
    .then(() => {
      res.status(200);
    })
    .catch((err) => console.log(err));
};
