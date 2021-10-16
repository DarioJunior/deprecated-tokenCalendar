import { expect } from 'chai';
import sinon from 'sinon';
import { StatusCodes } from 'http-status-codes';
import * as LoginUserService from '../../services/loginUser.service';
import * as LoginUserController from '../../controllers/loginUser.controller';

describe('1) LOGIN CONTROLLER:', () => {
  describe('1.1) if correct infos', () => {
    const req: any = {};
    const res: any = {};
    const USER_CREDENTIALS = {
      username: 'dario',
      password: 'secret',
    }

    before(() => {
      req.body = USER_CREDENTIALS;

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns(res);

      sinon.stub(LoginUserService, 'checkUserLogin').resolves(true);
    });

    after(() => {
      sinon.restore();
    });

    it('1.1.1) return http status success', async () => {
      await LoginUserController.loginUser(req, res);
      expect((res.status).calledWith(StatusCodes.OK)).to.be.equal(true);
    });

    it('1.1.2) return message http status success', async () => {
      await LoginUserController.loginUser(req, res);
      expect((res.send).calledWith('Usuário autenticado com sucesso.')).to.be.equal(true);
    });
  });
});