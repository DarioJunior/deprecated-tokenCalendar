import { expect } from 'chai';
import { findUserByUsername } from '../../models/loginUser.model';

describe('1)LOGIN USER MODELS:', () => {

  const USER_CREDENTIALS = {
    username: 'alonso'
  }
  describe('1.1)if user exists', () => {
    it('1.1.1) return a object', async() => {
      const result = await findUserByUsername(USER_CREDENTIALS);
      expect(result).to.be.a("object");
    });
  });
});
