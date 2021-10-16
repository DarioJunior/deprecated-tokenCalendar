import { expect } from 'chai';
import { findUserByUsername } from '../../models/loginUser.model';


const USER_CREDENTIALS = {
  username: 'alonso'
}
const UNKNOWN_USER_CREDENTIALS = {
  username: 'Desconhecido'
}

describe('1)LOGIN USER MODELS:', () => {


  describe('1.1)if user exists', () => {
    it('1.1.1) return a object', async() => {
      const result = await findUserByUsername(USER_CREDENTIALS);
      expect(result).to.be.a("object");
    });
  });

  describe('1.1)if user not exists', () => {
    it('1.1.1) return a boolean', async() => {
      const result = await findUserByUsername(UNKNOWN_USER_CREDENTIALS);
      expect(result).to.be.a("boolean");
      expect(result).to.be.equal(false);
    });
  });
});
