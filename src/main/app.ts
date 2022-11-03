'use strict';
// Outside modules
import express, {Application} from 'express';
import morgan from 'morgan';
// Inner modules imports
import {routes} from './routes';
import {notFoundHandler} from './middleware/404';
import errorHandler from './middleware/500';

import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();

// Global Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/', routes);

// Not found handler
app.use('*', notFoundHandler);

// Error handler
app.use(errorHandler);

export default {
  server: app,
  start: (port?: number) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}`);
    });
  },
};
