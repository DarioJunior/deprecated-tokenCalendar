import { expect } from 'chai';
import { createUserInDB } from '../../models/registerUser.model';

//Pesquisar "memory db para Mysql"
describe('1)REGISTER MODELS:', () => {
  describe('1.1)if register successful', () => {

    const USER_CREDENTIALS = {
      username: 'Test1',
      name: 'Test2',
      password: 'Test3'
    }
    
    it('1.1.1)return a string with username', async () => {
      const result = await createUserInDB(USER_CREDENTIALS);
      expect(result).to.be.a('string');
      expect(result).to.equal(USER_CREDENTIALS.username);
    });
  });
});
