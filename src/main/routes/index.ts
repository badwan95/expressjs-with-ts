import {Router} from 'express';
// Import all other routers here
import {testRoute} from './test-route';

// eslint-disable-next-line new-cap
export const routes = Router();

routes.use(testRoute);
