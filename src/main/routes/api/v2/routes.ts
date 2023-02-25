import {Router} from 'express';
// Import the API endpoints
import {testHandler} from './test/index';

// eslint-disable-next-line new-cap
export const routesV2 = Router();

routesV2.get('/', testHandler);
