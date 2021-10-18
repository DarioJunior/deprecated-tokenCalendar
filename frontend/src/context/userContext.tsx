import { createContext } from 'react';
import IUser from '../repositories/IUser';
import IRegisterUser from '../repositories/IRegisterUser';
import IEventList from '../repositories/IEventList';


type PropsUserContext = {
  userInfos: IUser;
  setUserInfos: React.Dispatch<React.SetStateAction<any>>; // type: UserType da problemas em compartilhar o value
  isLoggedIn: boolean;
  loggedUserInfo: boolean | IUser;
  registerUserInfo: IRegisterUser;
  setRegisterUserInfo: React.Dispatch<React.SetStateAction<any>>;
  eventList: IEventList;
  setEventList: React.Dispatch<React.SetStateAction<any>>
};

export const DEFAULT_CONTEXT = {
  setUserInfos: () => {},
  userInfos: {
    name: "",
    username: "",
    password: "",
  },
  isLoggedIn: false,
  loggedUserInfo: false,
  setRegisterUserInfo: () => {},// type: UserType da problemas em compartilhar o value
  registerUserInfo: {
    name: "",
    username: "",
    password: "",
  },
  setEventList: () => {},
  eventList: {
    id: "",
    hostId: "",
    name: "",
    description: "",
    startAt: "",
    finisheAt: "",
  }
  
};

const UserContext = createContext<PropsUserContext>(DEFAULT_CONTEXT);

export default UserContext;
