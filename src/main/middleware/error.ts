'use strict';
import {Request, Response, ErrorRequestHandler, NextFunction} from 'express';

export default (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(res.statusCode || 500).json({err: 'Error: ' + err});
};
