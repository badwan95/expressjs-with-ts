'use strict';
import {Request, Response, NextFunction, Handler} from 'express';

export const notFoundHandler: Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404).send({err: 'Path not found'});
};
