import { expect } from 'chai';
import sinon from 'sinon';

import * as EventsModel from '../../models/events.model';
import * as EventsService from '../../services/events.service';

describe('1)EVENTS SERVICES:', () => {

  const MOCK_EVENTS_LIST = [{
    id: 1,
    host_id: 2,
    name: 'Teste Mock',
    description: 'Teste Mocked event list',
    startAt: '2021-01-02 00:00:00',
    finisheAt: '2021-01-02 01:00:00'
  }]

  before(() => {
    console.log()
    sinon.stub(EventsModel, 'getAllEvents').resolves(MOCK_EVENTS_LIST);
  });

  after(() => {
    sinon.restore();
  })

  describe('1.1) if correct userID ', () => {
    it('1.1.1) if find event return an array', async () => {
      const result = await EventsService.getEventsList(999)
      expect(result).to.be.a('array');
      expect(result[0]).to.be.a('object');
    });

    it('1.1.2) verify item[0] is a object', async () => {
      const result = await EventsService.getEventsList(999)
      expect(result[0]).to.be.a('object');
    });
  });
});
