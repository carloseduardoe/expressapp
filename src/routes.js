const express = require('express'),
      toDoController = require('./controllers/ToDoController');

const router = express.Router();

// BROWSE
router.route("/todo")
      .get(toDoController.browse);

// READ
router.route("/todo/:id")
      .get(toDoController.read);

// EDIT
router.route("/todo/:id")
      .put(toDoController.edit);

// ADD
router.route("/todo")
      .post(toDoController.add);

// DELETE
router.route("/todo/:id")
      .delete(toDoController.delete);

module.exports = router;