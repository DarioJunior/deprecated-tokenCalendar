import { Request, Response } from 'express';
import { registerUser } from '../services/registerUser.service';

export async function RegisterUserController( req: Request, res: Response){
  try { 
    const { username, name, password } = req.body;
    const result = await registerUser({ username, name, password });
    if(!result) res.status(400).send('Erro no controller');

    res.status(201).send('Usuário cadastrado com sucesso!');
  } catch (err) {
    res.status(500).json(err);
  }
};
