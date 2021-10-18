import { connection } from './connection';

export async function findUserByUsername({ username }: any) {
    const [result]: any = await connection.execute(`
          SELECT *
          FROM users
          WHERE username = ?
        `, [username]);
  
    if (result.length !== 0) {
      console.log(result);
      return {
        id: result[0].id,
        name: result[0].name,
        username: result[0].username,
        password: result[0].password,
      };
    }
    return false;
}