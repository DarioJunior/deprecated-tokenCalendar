import { connection } from './connection';
import IEvents from '../repositories/IEvent';

export async function getAllEvents(userId: number):Promise<any> {
  const [result]:any = await connection.execute(`
    SELECT *
    FROM events
    WHERE host_id = ?
    `, [userId]);
  if(result.length !== 0 ) return result;
  return [];
}

export async function registerEvent( event:IEvents ):Promise<any> {
  const { name, host_id, description, startAt, finisheAt } = event;

  const result = await connection.execute(`
  INSERT INTO events (name, host_id, description, startAt, finisheAt)
  VALUES ( ?, ?, ?, ?, ?)
  `, [ name, host_id, description, startAt, finisheAt ]);

  return result;
}
