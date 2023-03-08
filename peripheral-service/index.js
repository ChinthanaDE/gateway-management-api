import express from 'express'
import bodyParser from "body-parser";
import morgan from 'morgan';
import dotenv from 'dotenv';

import dbConnection from './src/database/mongodb.config.js';

dotenv.config();

const port = process.env.PORT || 4001;

//DB Config
await dbConnection()

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/api/gateways', require('./src/routers/peripheralRoutes'));

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
