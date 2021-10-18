import express from 'express';
import registerRouter from './routes/register.router';
import loginRouter from './routes/login.router';
import eventsRouter from './routes/events.router';
import cors from 'cors';

const PORT = 3333;
const app = express();
app.use(express.json());

app.use(cors());
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/events', eventsRouter);

app.listen(PORT, () => console.log('server is running'));

