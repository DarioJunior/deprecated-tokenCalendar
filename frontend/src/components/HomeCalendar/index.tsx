import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.less';
import { Container } from './styles';

export function HomeCalendar() {
  const [value, setValue] = useState(new Date());

  useEffect(()=> {
    console.log(value)
  }, [value]);

  return (
    <Container>
      <Calendar
        onChange={setValue}
        value={value}
      />

    </Container>
  );
}