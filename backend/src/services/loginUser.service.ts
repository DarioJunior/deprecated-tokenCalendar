import { findUserByUsername } from '../models/loginUser.model';

export async function checkUserLogin(username: string, password: string) {
  // const user = await findUserByUsername(username);
  return true;
};