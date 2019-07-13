import express from 'express';
import toDoController from './controllers/ToDoController';

const router = express.Router();

// ToDo BREAD
router.route("/todos")
      .get(toDoController.browse);

router.route("/todos/:id")
      .get(toDoController.read);
      
router.route("/todos/:id")
      .put(toDoController.edit);
      
router.route("/todos")
      .post(toDoController.add);
      
router.route("/todos/:id")
      .delete(toDoController.delete);

module.exports = router;