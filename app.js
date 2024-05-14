const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

require('dotenv').config({ path: './.env' });

const routes = require('./routes/routes');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

// const corsOptions = { origin: 'http://localhost:5173/' };

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message, status: err.status });
});

module.exports = app;
