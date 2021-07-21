require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT);

app.use(morgan('dev'));

app.use("/api/employees",require('./routes/employees.routes'));

module.exports= app;