import {Router, Request, Response, NextFunction} from 'express';
import {IUser} from '../../../../types/types';
import {generateAccessToken} from '../../../middleware/auth/token';

// eslint-disable-next-line new-cap
export const authRoutes = Router();

authRoutes.get(
  '/get-token',
  async (req: Request, res: Response, next: NextFunction) => {
    const userObject: IUser = {
      name: 'the first name',
      email: 'the_email@mail.com',
    };
    try {
      const accessToken = await generateAccessToken(userObject);
      res.json(accessToken);
    } catch (e) {
      res.status(400);
      next(e);
    }
  },
);

authRoutes.get('/refresh-token', (req: Request, res: Response) => {
  res.send('Auth route');
});
