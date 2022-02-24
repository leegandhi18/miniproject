const logger = require('../lib/logger');
const VehicleRecordDao = require('../dao/vehicleRecordDao');

const service = {
  // user 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await VehicleRecordDao.insert(params);
      logger.debug(`(VehicleRecordService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(VehicleRecordService.reg) ${err.toString()}`);
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
      result = await VehicleRecordDao.selectList(params);
      logger.debug(`(VehicleRecordService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(VehicleRecordService.list) ${err.toString()}`);
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
      result = await VehicleRecordDao.selectInfo(params);
      logger.debug(`(VehicleRecordService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(VehicleRecordService.info) ${err.toString()}`);
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
      result = await VehicleRecordDao.update(params);
      logger.debug(`(VehicleRecordService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(VehicleRecordService.edit) ${err.toString()}`);
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
      result = await VehicleRecordDao.delete(params);
      logger.debug(`(VehicleRecordService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(VehicleRecordService.delete) ${err.toString()}`);
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
