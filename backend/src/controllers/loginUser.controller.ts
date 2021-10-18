import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { checkUserLogin } from '../services/loginUser.service';

export async function loginUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    console.log('aqui?:', username, password);
    const result = await checkUserLogin({ username, password });
    console.log(result);
    if (!result) return res.send([]);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}