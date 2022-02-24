const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const vehicleRecordService = require('../service/vehicleRecordService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      vehicleid: req.body.vehicleid,
      fuel_cost: req.body.fuel_cost,
      fuel_liter_cost: req.body.fuel_liter_cost,
      fuel_volume: req.body.fuel_volume,
      fuel_distance: req.body.fuel_distance,
      fuel_type: req.body.fuel_type,
      vehicle_exhaust: req.body.vehicle_exhaust,
      repair_detail: req.body.repair_detail,
      repair_cost: req.body.repair_cost,
      etc: req.body.etc,
      etc_cost: req.body.etc_cost,
    };
    logger.info(`(vehicleRecord.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.vehicleid) {
      const err = new Error('Not allowed null (vehicleid)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await vehicleRecordService.reg(params);
    logger.info(`(vehicleRecord.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      id: req.query.id,
    };
    logger.info(`(vehicleRecord.list.params) ${JSON.stringify(params)}`);

    const result = await vehicleRecordService.list(params);
    logger.info(`(vehicleRecord.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(vehicleRecord.info.params) ${JSON.stringify(params)}`);

    const result = await vehicleRecordService.info(params);
    logger.info(`(vehicleRecord.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      vehicleid: req.body.vehicleid,
      fuel_cost: req.body.fuel_cost,
      fuel_liter_cost: req.body.fuel_liter_cost,
      fuel_volume: req.body.fuel_volume,
      fuel_distance: req.body.fuel_distance,
      fuel_type: req.body.fuel_type,
      vehicle_exhaust: req.body.vehicle_exhaust,
      repair_detail: req.body.repair_detail,
      repair_cost: req.body.repair_cost,
      etc: req.body.etc,
      etc_cost: req.body.etc_cost,
    };
    logger.info(`(vehicleRecord.update.params) ${JSON.stringify(params)}`);

    const result = await vehicleRecordService.edit(params);
    logger.info(`(vehicleRecord.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(vehicleRecord.delete.params) ${JSON.stringify(params)}`);

    const result = await vehicleRecordService.delete(params);
    logger.info(`(vehicleRecord.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
