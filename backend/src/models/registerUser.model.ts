import IUser from '../repositories/IUser';
import { connection } from './connection';

export async function createUserInDB({username, name, password }:IUser) {
    const [data]:any = await connection.execute(`
      INSERT INTO users (username, name, password)
      VALUES (?, ?, ?)
    `, [username, name, password]);
    const { insertId } = data;
    return insertId;
};
