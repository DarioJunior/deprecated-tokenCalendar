import { findUserByUsername } from '../models/loginUser.model';

export async function checkUserLogin({ username, password }: any) {
  const user = await findUserByUsername({ username });
  if (!user) return false;
  if (user.password !== password) return false;
  
  return user;
};