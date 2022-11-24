// var express = require('express');
import { Router } from 'express';

import alliRouter from './alliance.js';
import corpRouter from './corporation.js';
import charRouter from './character.js';
import campRouter from './campaigns.js';

var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/alliance', alliRouter);
router.use('/corporation', corpRouter);
router.use('/character', charRouter);
router.use('/campaigns', campRouter);

export default router;
