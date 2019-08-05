'use strict';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './src/routes';

const app = express();

// Enable All CORS Requests
app.use(cors());

// Setup request body JSON parsing.
app.use(express.json());

// Setup morgan which gives us HTTP request logging.
app.use(morgan('dev'));

app.use('/api', routes);

// Send 404 if no routes matched.
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// Global error handler.
app.use((err, req, res, next) => {
  console.error(`Global error handler: ${JSON.stringify(err.stack)}`);

  res.status(500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

console.clear();

// Set our port.
app.set('port', process.env.PORT || 5000);

// Start listening on our port.
const server = app.listen(app.get('port'), () => {
  console.log(`Express listening on port ${server.address().port}`);
});
