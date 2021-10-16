import { expect } from 'chai'
import sinon from 'sinon';

import * as RegisterModel from '../../models/registerUser.model';
import * as RegisterService from '../../services/registerUser.service';

describe('1)REGISTER SERVICES:', () => {
  describe('1.1) if correct infos ', () => {

    const USER_CREDENTIALS = {
      username: 'Test1',
      name: 'Test2',
      password: 'Test3'
    }

    before(() => {
      sinon.stub(RegisterModel, 'createUserInDB').resolves(USER_CREDENTIALS.username);
    });

    after(() => {
      sinon.restore();
    });

    it('1.1.1) return a string with username', async () => {
      const result = await RegisterService.registerUser(USER_CREDENTIALS)
      expect(result).to.be.a('string');
      expect(result).to.equal(USER_CREDENTIALS.username);
    });
  });

  describe('1.2) if wrong or missing infos ', () => {

    const WRONG_USER_CREDENTIALS = {
      username: '',
      name: '',
      password: ''
    }

    it('1.2.1) return a boolean', async () => {
      const result = await RegisterService.registerUser(WRONG_USER_CREDENTIALS);
      expect(result).to.be.a('boolean');
      expect(result).to.equal(false);
    });
  });
});