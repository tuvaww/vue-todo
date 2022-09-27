const db = require("../utils/database");

module.exports = class Todo {
  constructor(id, title, date, isDone, desc) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.isDone = isDone;
    this.description = desc;
  }

  save() {
    return db.execute(
      "INSERT INTO todos( title, date, isDone, description) VALUES (?,?,?, ?)",
      [this.title, this.date, this.isDone, this.description]
    );
  }
  static fetchAll() {
    return db.execute("SELECT * FROM todos");
  }

  static deleteById(id) {
    return db.execute("");
  }
  static findById() {}
};
