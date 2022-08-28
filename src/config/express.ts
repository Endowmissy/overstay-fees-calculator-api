import express, { json, urlencoded, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import constants from '../utils/constants';

const app = express();
const {
  WELCOME,
  v1,
} = constants;

app.use(json());
app.use(urlencoded({ extended: false }));

// Use helmet to secure Express headers
app.use(helmet());
app.disable('x-powered-by');

app.use(cors({origin: '*', // allow to server to accept request from different origin
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
optionsSuccessStatus: 200,
credentials: true, // allow session cookie from browser to pass through));
}));

app.get('/', (req: Request, res: Response) => res.json({ message: WELCOME }));

export default app;
