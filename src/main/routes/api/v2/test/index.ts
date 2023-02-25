import {Request, Response, NextFunction} from 'express';
import {validateLoginData} from '../../../../utils/validations';

export const testHandler = (req: Request, res: Response) => {
  res.send('API V2');
};

export const testHandlerPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const valid = await validateLoginData(req.body);
    res.json(valid);
  } catch (e) {
    res.status(400);
    next(e);
  }
};
