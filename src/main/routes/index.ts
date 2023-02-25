import {Router} from 'express';
// Import general routes here
import {testRoute} from './test-route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../configs/swagger';

// eslint-disable-next-line new-cap
export const generalRoutes = Router();

generalRoutes.use('/api-docs', swaggerUi.serve);
generalRoutes.get('/api-docs', swaggerUi.setup(swaggerDocument));
generalRoutes.use(testRoute);
