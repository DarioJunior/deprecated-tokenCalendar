import { expect } from 'chai';
import sinon from 'sinon';

import * as RegisterController from '../../controllers/registerUser.controller';
import * as RegisterService from '../../services/registerUser.service';

describe('1)REGISTER CONTROLLER:', () => {
  describe('1.1) if correct infos', async () => {
    const req: any = {};
    const res: any = {};

    before(() => {
      req.body = {
        username: 'test1',
        name: 'test2',
        password: 'secret'
      };

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns({});

      sinon.stub(RegisterService, 'registerUser').resolves(req.body.username);
    });

    after(() => {
      sinon.restore();
    });

    it('1.1.1) return status 201', async() => {
      await RegisterController.createUser(req, res);
      expect((res.status).calledWith(201)).to.be.equal(true);
    });

    it('1.1.2) return "Usuário cadastrado com sucesso"', async() => {
      await RegisterController.createUser(req, res);
      expect((res.send).calledWith('Usuário cadastrado com sucesso!')).to.be.equal(true);
    });
  });
});