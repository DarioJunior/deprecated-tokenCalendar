import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { checkUserLogin } from '../services/loginUser.service';

export async function loginUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const result = await checkUserLogin({ username, password });
    if (!result) return res.send([]);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}