import { expect } from 'chai';
import sinon from 'sinon';

import * as LoginUserModel from '../../models/loginUser.model';
import * as LoginUserService from '../../services/loginUser.service';

describe('1)USER LOGIN SERVICES:', () => {
  describe('1.1) if correct infos ', () => {

    const USERNAME_CREDENTIAL = {
      username: 'dario',
      password: 'secret'
    }

    before(() => {
      sinon.stub(LoginUserModel, 'findUserByUsername').resolves(USERNAME_CREDENTIAL);
    });

    after(() => {
      sinon.restore();
    });

    it('1.1.1) return "true" if finded User', async () => {
      const result = await LoginUserService.checkUserLogin(USERNAME_CREDENTIAL)
      expect(result).to.be.a('boolean');
      expect(result).to.be.equal(true);
    });

  })
});
