import {Router, Request, Response} from 'express';
import {pool} from '../../configs/database/database';

// eslint-disable-next-line new-cap
export const testRoute = Router();

testRoute.get('/', (req: Request, res: Response) => {
  res.send('test route');
});

testRoute.get('/mssql', async (req: Request, res: Response) => {
  try {
    const dbResult = await pool.request().query('SELECT * FROM Employees');
    const responseObj = {
      status: 200,
      body: dbResult.recordset,
    };
    res.status(200).json(responseObj);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
