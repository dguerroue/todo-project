const TodoModel = require('../models/todo.model');

function handleNotFound(todo) {
  if(!todo) {
    return res.status(404).json({
      message: 'Todo not found'
    });
  }
}

/* --- START CRUD --- */

// Create new todo item
module.exports.setTodo = async(req, res) => {
  if(!req.body.name) {
    return res.status(400).json({
      message: 'Todo name is required'
    });
  }

  try {
    const todo = await TodoModel.create({
      name: req.body.name,
      completed: false,
      userId: req.user.id,
    });
  
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: 'Error creating todo',
      error: error.message
    });
  }
};

// Get all todos
module.exports.getTodos = async(req, res) => {
  try {
    const todos = await TodoModel.find({ userId: req.user.id });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching todos',
      error: error.message
    });
  }
};

// Update todo item by ID
module.exports.updateTodo = async(req, res) => {
  const todo = await TodoModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  handleNotFound(todo);

  res.status(200).json(todo);
};

// Delete todo item by ID
module.exports.deleteTodo = async(req, res) => {
  const todo = await TodoModel.findByIdAndDelete(req.params.id);

  handleNotFound(todo);

  res.status(200).json({
    message: 'Todo deleted successfully'
  });
};

/* --- END CRUD --- */


// Toggle todo by id
module.exports.toggleTodoByID = async(req, res) => {
  const todo = await TodoModel.findById(req.params.id);

  handleNotFound(todo);

  await TodoModel.findByIdAndUpdate(req.params.id, {
    completed: !todo.completed,
  }, {
    new: true
  });

  res.status(200).json({
    message: 'Todo toggled successfully'
  });
}