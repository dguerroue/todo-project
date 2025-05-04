
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;

connectDB();

const app = express();

if(!port) {
  console.error('Port not found');
  process.exit(1);
}

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require('./routes/todo.routes'));
app.use("/api/auth", require('./routes/auth.routes'));

app.listen(port, () => console.log(`Server started on port: ${port}`))