import { useContext, BaseSyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Input } from './styles';

import UserContext from '../../context/userContext';

export function FormRegister() {
const history = useHistory();
const { setRegisterUserInfo } = useContext(UserContext);

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const [ name, username, password ] = event.target;
    const loginInfo = {
      name: name.value,
      username: username.value,
      password: password.value
    }
    setRegisterUserInfo(loginInfo);
    history.push('/');
  }

  return(
    <Container onSubmit={ (event) => handleSubmit(event) }>
      <label htmlFor="">
        Name:
        <Input type="text" />
      </label>
      <label htmlFor="">
        Username:
        <Input type="text" />
      </label>
      <label htmlFor="">
        Password:
        <Input type="text" />
      </label>

      <button type="submit">
        Cadastrar
      </button>
    </Container>
  );
}