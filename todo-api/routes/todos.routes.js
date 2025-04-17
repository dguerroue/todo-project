const express = require('express');
const router = express.Router();

// Get all todos
router.get('/', (req, res) => {
  res.json({
    body: {
      todos: [
        {
          id: 1,
          text: 'Acheter des tomates'
        }
      ]
    }
  })
});

// Post new todo item
router.post('/', (req, res) => {
  res.json({
    message: req.body
  })
})
 
// Update todo item by ID
router.put('/:id', (req, res) => {
  res.json({
    messageId: req.params.id
  })
})

// Delete todo item by ID
router.delete('/:id', (req, res) => {
  res.json({
    message: "Todo ID deleted: " + req.params.id
  })
})

module.exports = router;
