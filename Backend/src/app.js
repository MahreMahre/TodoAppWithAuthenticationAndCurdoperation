const express = require('express');
const app = express();
const Authrouter  = require('./routes/userAuth');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const todoRouter = require("./routes/todoRoute")
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth',Authrouter);
app.use('/api/v1/todo',todoRouter);








module.exports = app;