import express from 'express';

import toDoController from './controllers/ToDoController';
import authController from './controllers/AuthController';


const router = express.Router();

// Base Route
router.route('/')
.get((req, res) => {
    res.json({
        message: 'Welcome to the REST API Authentication with Express project!',
    });
});



// Authentication
const users = [];

// Returns the currently authenticated user.
router.get('/users', authController.authenticateUser, authController.currentUser);

router.post('/users', authController.userValidation, authController.createUser);



// To Do's
router.get("/todos", toDoController.browse);

router.get("/todos/:id", toDoController.read);

router.put("/todos/:id", toDoController.edit);

router.post("/todos", toDoController.add);

router.delete("/todos/:id", toDoController.delete);



module.exports = router;