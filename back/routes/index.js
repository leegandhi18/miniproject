const express = require('express');
const logger = require('../lib/logger');
const userRouter = require('./user');
const vehicleRouter = require('./vehicle');
const boardRouter = require('./board');
const commentRouter = require('./comment');
const vehicleRecordRouter = require('./vehicleRecord');
const reservationRouter = require('./reservation');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

// user
router.use('/users', userRouter);

// vehicle
router.use('/vehicles', vehicleRouter);

// board
router.use('/boards', boardRouter);

// vehicleRecord
router.use('/vehicleRecords', vehicleRecordRouter);

// reservation
router.use('/reservations', reservationRouter);

// comment
router.use('/comments', commentRouter);

module.exports = router;
