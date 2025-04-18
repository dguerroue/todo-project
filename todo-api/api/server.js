
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

connectDB();

const app = express();

if(!port) {
  console.error('Port not found');
  process.exit(1);
}

// Middleware request datas
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", require('./routes/todo.routes'));

app.listen(port, () => console.log(`Server started on port: ${port}`))