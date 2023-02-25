'use strict';
import {Request, Response, NextFunction, Handler} from 'express';

export const version: Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const version: string = req.path?.split('/')?.[1] || '';
  req.version = version;
  next();
};
