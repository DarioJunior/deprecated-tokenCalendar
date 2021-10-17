import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export function validadeBody(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, description, startAt, finisheAt } = req.body;
    if(!name) return res.status(StatusCodes.BAD_REQUEST).json({message: 'Nome inválido'});
    if(!description) return res.status(StatusCodes.BAD_REQUEST).json({message: 'Descrição inválida'});
    if(!startAt) return res.status(StatusCodes.BAD_REQUEST).json({message: 'Data Inicial inválida'});
    if(!finisheAt) return res.status(StatusCodes.BAD_REQUEST).json({message: 'Data final inválida'});
    next();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: err.message});
  }
}