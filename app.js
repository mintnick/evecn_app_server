import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import phin from 'phin'

import indexRouter from './routes/index.js';

// set app
const app = express();

// phin
const phin = phin;
phin.defaults = {'method': 'get', 'headers': {'User-Agent': 'evecn.app'}}
app.phin = phin;

// default modules
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, 'public')));

// set routes
app.use('/', indexRouter);

export default app;