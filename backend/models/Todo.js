const db = require("../utils/database");

module.exports = class Todo {
  constructor(id, title, date, isDone) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.isDone = isDone;
  }

  save() {
    return db.execute(
      "INSERT INTO todos( title, date, isDone) VALUES (?,?,?)",
      [this.title, this.date, this.isDone]
    );
  }
  static fetchAll() {
    return db.execute("SELECT * FROM todos");
  }

  static deleteById() {}
  static findById() {}
};
