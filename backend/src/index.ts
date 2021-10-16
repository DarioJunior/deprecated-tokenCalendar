import express from 'express';
import registerRouter from './routes/register.router';
import loginRouter from './routes/login.router';


const PORT = 3333;
const app = express();
app.use(express.json());

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => console.log('server is running'));

