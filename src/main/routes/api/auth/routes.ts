import {Router, Request, Response, NextFunction} from 'express';
import {IUser} from '../../../../types/types';
import {
  authenticate,
  verifyRefreshToken,
} from '../../../middleware/auth/authenticate-token';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../../../middleware/auth/generate-token';

// eslint-disable-next-line new-cap
export const authRoutes = Router();

// This should be replaced by database implementation (or redis)
const createdRefreshTokens: string[] = [];

authRoutes.get(
  '/get-tokens',
  async (req: Request, res: Response, next: NextFunction) => {
    const userObject: IUser = {
      name: 'the first name',
      email: 'the_email@mail.com',
    };
    try {
      const [accessToken, refreshToken] = await Promise.all([
        generateAccessToken(userObject),
        generateRefreshToken(userObject),
      ]);
      createdRefreshTokens.push(refreshToken);
      res.json({accessToken, refreshToken});
    } catch (e) {
      res.status(400);
      next(e);
    }
  },
);

authRoutes.get(
  '/protected-route',
  authenticate,
  (req: Request, res: Response) => {
    res.send('Protected route');
  },
);

authRoutes.post(
  '/refresh-token',
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken: string = req.body.token;
    if (!refreshToken) {
      res.status(401);
      next('Refresh token is missing from the request');
      return;
    }
    if (!createdRefreshTokens.includes(refreshToken)) {
      res.status(403);
      next('Refresh token is missing from database');
      return;
    }
    try {
      const userVerifiedToken = await verifyRefreshToken(refreshToken);
      const userObject: IUser = {
        name: userVerifiedToken.name,
        email: userVerifiedToken.email,
      };
      const accessToken = await generateAccessToken(userObject);
      res.json({accessToken});
    } catch (e) {
      res.status(403);
      next(e);
    }
  },
);
