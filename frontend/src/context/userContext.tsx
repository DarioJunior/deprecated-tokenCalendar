import { createContext } from 'react';
import IUser from '../repositories/IUser';
import IRegisterUser from '../repositories/IRegisterUser';

type PropsUserContext = {
  userInfos: IUser;
  setUserInfos: React.Dispatch<React.SetStateAction<any>>; // type: UserType da problemas em compartilhar o value
  isLoggedIn: boolean;
  loggedUserInfo: boolean | IUser;
  registerUserInfo: IRegisterUser;
  setRegisterUserInfo: React.Dispatch<React.SetStateAction<any>>;
};

export const DEFAULT_CONTEXT = {
  userInfos: {
    name: "",
    username: "",
    password: "",
  },
  setUserInfos: () => {},
  isLoggedIn: false,
  loggedUserInfo: false,
  setRegisterUserInfo: () => {},// type: UserType da problemas em compartilhar o value
  registerUserInfo: {
    name: "",
    username: "",
    password: "",
  }
};

const UserContext = createContext<PropsUserContext>(DEFAULT_CONTEXT);

export default UserContext;
