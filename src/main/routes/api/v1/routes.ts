import {Router} from 'express';
// Import the API endpoints
import {testHandler} from './test/index';

// eslint-disable-next-line new-cap
export const routesV1 = Router();

routesV1.get('/', testHandler);
