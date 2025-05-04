const express = require('express');
const { getTodos, setTodo, updateTodo, deleteTodo, toggleTodoByID } = require('../controllers/todo.controller');
const protect = require('../middlewares/auth.middleware');
const router = express.Router();

/* --- START CRUD --- */

// Create new todo item
router.post('/', protect, setTodo);

// Get all todos
router.get('/', protect, getTodos);
 
// Update todo item by ID
router.put('/:id', updateTodo);

// Delete todo item by ID
router.delete('/:id', deleteTodo);

/* --- END CRUD --- */

// Toggle todo by id
router.put('/toggle/:id', toggleTodoByID);

module.exports = router;
