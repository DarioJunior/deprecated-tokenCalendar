import { expect } from 'chai';
import { getAllEvents, registerEvent } from '../../models/events.model'

const TEST_USER_ID = 28;
const UNKNOWN_TEST_USER_ID = 999;
const EVENT_INFOS = {
  name: 'Evento Teste Token',
  host_id: 28,
  description: 'Descrição do Evento de teste',
  startAt: '2021-02-02 13:00',
  finishAt: '2021-02-02 14:00',
}

describe('1)HTTP GET EVENT MODEL:', () =>{
  describe('1.1)if exists event', () => {
    it('1.1.1) return all events', async () => {
      const result = await getAllEvents(TEST_USER_ID);
      expect(result).to.be.an('array');
      expect(result.length > 0).to.be.equal(true);
    });
  });

  describe('1.2) if not exists event', () => {
    it('1.2.1) return an empty array', async () => {
      const result = await getAllEvents(UNKNOWN_TEST_USER_ID);
      expect(result).to.be.an('array');
      expect(result.length === 0).to.be.equal(true);
    });
  });
});

describe('2) HTTP POST EVENT MODEL:', () =>{
  describe('2.1) register success',  () => {
    it('return registered array', async () => {
      const result = await registerEvent(EVENT_INFOS);
      expect(result).to.be.an('array');
    })
  });
});  



