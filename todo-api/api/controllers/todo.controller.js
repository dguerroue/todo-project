const TodoModel = require('../models/todo.model');

// create a Todo iten

module.exports.setTodo = async(req, res) => {
  if(!req.body.name) {
    return res.status(400).json({
      message: 'Todo name is required'
    });
  }

  const todo = await TodoModel.create({
    name: req.body.name,
    completed: false
  });

  res.status(200).json(todo);
};