import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// import routes
import indexRouter from './routes/index.js';
import alliRouter from './routes/alliance.js';
import corpRouter from './routes/corporation.js';
import charRouter from './routes/character.js';
import campRouter from './routes/campaigns.js';

// set app
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, 'public')));

// set routes
app.use('/', indexRouter);
app.use('/alliance', alliRouter);
app.use('/corporation', corpRouter);
app.use('/character', charRouter);
app.use('/campaigns', campRouter);

export default app;