'use strict';
import {Request, Response, ErrorRequestHandler, NextFunction} from 'express';

export default (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).send({err: 'Server Error Detected: ' + err});
};
