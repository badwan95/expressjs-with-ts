import {Router} from 'express';
// Import the API endpoints
import {testHandler, testHandlerPost} from './test/index';

// eslint-disable-next-line new-cap
export const routesV2 = Router();

routesV2.get('/', testHandler);
routesV2.post('/', testHandlerPost);
