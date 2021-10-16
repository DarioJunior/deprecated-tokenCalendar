import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Dario@55852565',
  database: 'tokenCalendar',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});