const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todoController");

router.post("/create", todoController.postTodos);

router.get("/", todoController.getTodos);

module.exports = router;
