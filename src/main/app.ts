'use strict';
// Outside modules
import express, {Application} from 'express';
import morgan from 'morgan';
// Inner modules imports
import {notFoundHandler} from './middleware/404';
import {version} from './middleware/version';
import errorHandler from './middleware/error';
// Import all other routers here
import {generalRoutes} from './routes';
import {routesV1} from './routes/api/v1/routes';
import {routesV2} from './routes/api/v2/routes';

import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();

// Global Middleware
app.use(express.json());
app.use(morgan('dev'));

app.use(version);

// Routes
app.use('/', generalRoutes);
app.use('/v1', routesV1);
app.use('/v2', routesV2);

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
