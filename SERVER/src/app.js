require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT);

app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api/employees",require('./routes/employees.routes'));

module.exports= app;