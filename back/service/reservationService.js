const logger = require('../lib/logger');
const reservationDao = require('../dao/reservationDao');

const service = {
  // user 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await reservationDao.insert(params);
      logger.debug(`(reservationService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(reservationService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },

  // selectList
  async list(params) {
    let result = null;

    try {
      result = await reservationDao.selectList(params);
      logger.debug(`(reservationService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(reservationService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await reservationDao.selectInfo(params);
      logger.debug(`(reservationService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(reservationService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

  // update
  async edit(params) {
    let result = null;

    try {
      result = await reservationDao.update(params);
      logger.debug(`(reservationService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(reservationService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

  // delete
  async delete(params) {
    let result = null;

    try {
      result = await reservationDao.delete(params);
      logger.debug(`(reservationService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(reservationService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
