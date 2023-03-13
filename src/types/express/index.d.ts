/* eslint-disable no-unused-vars */
import {IUser} from '../types';
declare global {
  namespace Express {
    interface Request {
      version?: Language;
      user?: IUser;
    }
  }
}
