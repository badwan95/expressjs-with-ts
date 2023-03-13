import jwt from 'jsonwebtoken';
import {IUser} from '../../../types/types';
const ACCESS_TOKEN_SECRET = process.env['ACCESS_TOKEN_SECRET']!;
const ACCESS_TOKEN_SECRET_EXPIRY =
  process.env['ACCESS_TOKEN_SECRET_EXPIRY'] || '15m';

export const generateAccessToken = async (user: IUser): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = {
      full_name: user.name,
      email: user.email,
    };
    jwt.sign(
      payload,
      ACCESS_TOKEN_SECRET,
      {expiresIn: ACCESS_TOKEN_SECRET_EXPIRY},
      (err: Error | null, token: string | undefined) => {
        if (err) {
          reject(err);
        } else if (token === undefined) {
          reject(new Error('Token not defined'));
        } else {
          resolve(token);
        }
      },
    );
  });
};