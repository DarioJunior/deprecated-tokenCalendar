import express from 'express';
import registerRouter from './routes/register.router';

const PORT = 3333;
const app = express();
app.use(express.json());

app.use('/', registerRouter);

app.listen(PORT, () => console.log('server is running'));

