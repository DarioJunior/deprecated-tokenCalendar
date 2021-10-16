import IUser from '../repositories/IUser';
import { connection } from './connection';

export async function createUserInDB({username, name, password }:IUser) {
    const [data] = await connection.execute(`
      INSERT INTO users (username, name, password)
      VALUES (?, ?, ?)
    `, [username, name, password]);
    return username;
};
