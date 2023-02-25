import {Router} from 'express';
// Import general routes here
import {testRoute} from './test-route';

// eslint-disable-next-line new-cap
export const generalRoutes = Router();

generalRoutes.use(testRoute);
