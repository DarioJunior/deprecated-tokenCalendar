import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { checkUserLogin } from '../services/loginUser.service';

export async function loginUser(req: Request, res: Response) {

  try {
    const { username, password } = req.body;
    const result = await checkUserLogin(username, password);
    if (!result) res.status(StatusCodes.NOT_FOUND).send('Credenciais inválidas, tente novamente.');
    res.status(StatusCodes.OK).send('Usuário autenticado com sucesso.');
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}