
const express = require('express');
const port = 5000;

const app = express();

// Middleware request datas
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", require('./routes/todos.routes'));

app.listen(port, () => console.log(`Server started on port: ${port}`))