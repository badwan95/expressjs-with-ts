'use strict';
import {Request, Response, NextFunction, Handler} from 'express';
import jwt from 'jsonwebtoken';
const ACCESS_TOKEN_SECRET = process.env['ACCESS_TOKEN_SECRET']!;

export const authenticate: Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) {
    return res.status(401).send({err: 'Authorization token not found.'});
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .send({err: 'Authorization token is invalid.', errLong: err});
    }
    // const userItem = {
    //   name: user?.name,
    // };
    // req.user = user;
    next();
  });
};
