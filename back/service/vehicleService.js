const logger = require('../lib/logger');
const vehicleDao = require('../dao/vehicleDao');

const service = {
  // user 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await vehicleDao.insert(params);
      logger.debug(`(vehicleService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(vehicleService.reg) ${err.toString()}`);
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
      result = await vehicleDao.selectList(params);
      logger.debug(`(vehicleService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(vehicleService.list) ${err.toString()}`);
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
      result = await vehicleDao.selectInfo(params);
      logger.debug(`(vehicleService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(vehicleService.info) ${err.toString()}`);
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
      result = await vehicleDao.update(params);
      logger.debug(`(vehicleService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(vehicleService.edit) ${err.toString()}`);
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
      result = await vehicleDao.delete(params);
      logger.debug(`(vehicleService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(vehicleService.delete) ${err.toString()}`);
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
