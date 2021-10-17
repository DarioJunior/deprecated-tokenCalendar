import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getEventsList, registerEventInList } from '../services/events.service';

export async function getEvents(req: Request, res: Response): Promise<any> {
  try {
    const { id } = req.params;
    const events = await getEventsList(Number(id));
    res.status(StatusCodes.OK).send({ events });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err});
  };
};

export async function createEvent(req: Request, res: Response): Promise<any> {
  try {
    const { id } = req.params;
    const eventInfos = req.body;
    eventInfos.host_id = id;
    await registerEventInList(eventInfos);
    res.status(StatusCodes.OK).send('Evento criado com sucesso');
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err});
  };
};
