import { Container } from './styles';
import { HomeCalendar  } from '../../components/HomeCalendar';
import { ListEvents } from '../../components/ListEvents';

export function Events() {
  return(
    <Container>
      <h1>Página de eventos</h1>
      <HomeCalendar />
      <ListEvents />
    </Container>
  );
}