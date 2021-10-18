import { FC, useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext, { DEFAULT_CONTEXT } from './userContext';
import IUser from '../repositories/IUser';

import { getUserInDB, registerUserInDB } from '../services/userServices';

const UserContextProvider: FC = ({ children }) => {
  const [registerUserInfo, setRegisterUserInfo] = useState(DEFAULT_CONTEXT.registerUserInfo);
  const [userInfos, setUserInfos] = useState(DEFAULT_CONTEXT.userInfos);
  const [isLoggedIn, setIsLoggedIn] = useState(DEFAULT_CONTEXT.isLoggedIn)
  const [loggedUserInfo, setLoggedUserInfo] = useState(DEFAULT_CONTEXT.loggedUserInfo);

  const history = useHistory();


  useEffect(() => {
    console.log('Entrou no useEffect isLoggedIn', isLoggedIn)
    if(isLoggedIn) {
      history.push('/events')
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if(userInfos.username !== "" && userInfos.username !== ""){
      const fetchUserInDB = async (userInfos: IUser) => {
        const user:any = await getUserInDB(userInfos);
        console.log('Entrou no useEffect loginInfo', user)
        if(user.length === 0){
          return setIsLoggedIn(false);
        }
        setLoggedUserInfo(user);
        setIsLoggedIn(true);
      }
      fetchUserInDB(userInfos);
    };
  }, [userInfos]);

  useEffect(() => {
    if(registerUserInfo.name !== ""
      && registerUserInfo.username !== ""
      && registerUserInfo.password !== ""
      ){
      console.log('Entrou no useEffect register')
      console.log(registerUserInfo)
      const fetchRegisterUserInDB = async (userInfos: IUser) => {
        await registerUserInDB(userInfos);
      };
      fetchRegisterUserInDB(registerUserInfo)
    }
  }, [registerUserInfo]);
  return (
    <UserContext.Provider value={{
      userInfos,
      setUserInfos,
      isLoggedIn,
      loggedUserInfo,
      registerUserInfo,
      setRegisterUserInfo
    }}
  >
    { children }
  </UserContext.Provider>
  )
};

export default UserContextProvider;