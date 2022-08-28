import express, { json, urlencoded, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import constants from '../utils/constants';
import logger from '../config/logger';
import apiV1Routes from '../routes/v1';
import Helper from '../utils/helpers/helpers';
import NotFoundError from '../utils/errors/not.found.error';

const app = express();
const { errorResponse } = Helper;
const {
  WELCOME,
  v1,
} = constants;

app.use(json());
app.use(urlencoded({ extended: false }));

// Use helmet to secure Express headers
app.use(helmet());
app.disable('x-powered-by');

global.logger = logger;

app.use(cors({origin: '*', // allow to server to accept request from different origin
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
optionsSuccessStatus: 200,
credentials: true, // allow session cookie from browser to pass through));
}));

app.get('/', (req: Request, res: Response) => res.json({ message: WELCOME }));

app.use(v1, apiV1Routes);

// error handlers

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError('Route')));
// will print stacktrace
app.use((err: any, req: Request, res: Response, next: NextFunction) => errorResponse(req, res, err))

export default app;
