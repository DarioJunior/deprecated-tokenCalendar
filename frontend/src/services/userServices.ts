import axios from "axios";
import IUser from '../repositories/IUser';

export const registerUserInDB = async (userInfos:any = false):Promise<IUser | boolean> => {
  const { name, username, password } = userInfos
  if ( name === "" || username === "" || password === "") {
    return false;
  }
  await axios.post('http://localhost:3333/register',
  { name, username, password },
  );
  return true;
} 

export const getUserInDB = async (userInfos:any = false):Promise<IUser | boolean > => {
  const { username, password } = userInfos
  if (username === "" || password === "") {
    return false;
  }
  const { data }:any = await axios.post('http://localhost:3333/login',
  { username, password },
  );
  if(data === []) return false;
  return data;
} 

