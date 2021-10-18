import { useContext, BaseSyntheticEvent } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Container, Input } from './styles';

import UserContext from '../../context/userContext';

export function FormLogin() {
  const { userInfos, setUserInfos } = useContext(UserContext);
  const history = useHistory()

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const [ username, password ] = event.target;
    const loginInfo = {
      username: username.value,
      password: password.value
    }
    setUserInfos(loginInfo);
    // history.push('/');
  };

  return (
  <Container onSubmit={ (event) => handleSubmit(event) }>
    <label htmlFor="">
      Login:
      <Input type="text" />
    </label>
    <label htmlFor="">
      Password:
      <Input type="text" />
    </label>

    <button type="submit">
      Login
    </button>

    <p>
      Não possui uma conta? <Link to="/register">Clique aqui.</Link>
    </p>
  </Container>
  );
}
