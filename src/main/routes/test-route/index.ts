import {Router, Request, Response} from 'express';

// eslint-disable-next-line new-cap
export const testRoute = Router();

testRoute.get('/', (req: Request, res: Response) => {
  res.send('test route');
});
