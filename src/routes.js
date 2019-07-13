import express from 'express';
import toDoController from './controllers/ToDoController';

const router = express.Router();

// ToDo BREAD
router.route("/todo")
      .get(toDoController.browse);

router.route("/todo/:id")
      .get(toDoController.read);
      
router.route("/todo/:id")
      .put(toDoController.edit);
      
router.route("/todo")
      .post(toDoController.add);
      
router.route("/todo/:id")
      .delete(toDoController.delete);

module.exports = router;