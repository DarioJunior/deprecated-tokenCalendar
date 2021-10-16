import { connection } from './connection';

export async function findUserByUsername({ username }: any) {
  // Não consegui utilizar o "?" para proteger a query verificar pq a connection não aceita 3 argumentos
    const [result]: any = await connection.execute(`
          SELECT *
          FROM users
          WHERE username = ?
        `, [username]);
  
    if (result.length !== 0) {
      return {
        username: result[0].username,
        password: result[0].password,
      };
    }
    
    return false;
}