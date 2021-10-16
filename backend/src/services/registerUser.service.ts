import IUser from '../repositories/IUser';

import { createUserInDB } from '../models/registerUser.model';


export async function registerUser({username, name, password}: IUser) {
  if (!username || !name || !password) return false;
  const result = await createUserInDB({username, name, password});
  return result;
}