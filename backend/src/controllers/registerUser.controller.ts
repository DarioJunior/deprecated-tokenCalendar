import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { registerUser } from '../services/registerUser.service';

export async function createUser( req: Request, res: Response){
  try { 
    const { username, name, password } = req.body;
    const result = await registerUser({ username, name, password });
    if(!result) res.status(StatusCodes.BAD_REQUEST).send('Erro no controller');

    res.status(StatusCodes.CREATED).send('Usuário cadastrado com sucesso!');
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
