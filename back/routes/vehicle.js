const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const vehicleService = require('../service/vehicleService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      userid: req.body.userid,
      vehicle_no: req.body.vehicle_no,
      vehicle_type: req.body.vehicle_type,
      vehicle_name: req.body.vehicle_name,
      vehicle_year: req.body.vehicle_year,
      fuel_type: req.body.fuel_type,
      vehicle_exhaust: req.body.vehicle_exhaust,
      number_of_passenger: req.body.number_of_passenger,
      drive_distance: req.body.drive_distance,
    };
    logger.info(`(vehicle.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.vehicle_no) {
      const err = new Error('Not allowed null (vehicle_no)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await vehicleService.reg(params);
    logger.info(`(vehicle.reg.result) ${JSON.stringify(result)}`);

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
      userid: req.query.userid,
    };
    logger.info(`(vehicle.list.params) ${JSON.stringify(params)}`);

    const result = await vehicleService.list(params);
    logger.info(`(vehicle.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(vehicle.info.params) ${JSON.stringify(params)}`);

    const result = await vehicleService.info(params);
    logger.info(`(vehicle.info.result) ${JSON.stringify(result)}`);

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
      userid: req.body.userid,
      vehicle_no: req.body.vehicle_no,
      vehicle_type: req.body.vehicle_type,
      vehicle_name: req.body.vehicle_name,
      vehicle_year: req.body.vehicle_year,
      fuel_type: req.body.fuel_type,
      vehicle_exhaust: req.body.vehicle_exhaust,
      number_of_passenger: req.body.number_of_passenger,
      drive_distance: req.body.drive_distance,
    };
    logger.info(`(vehicle.update.params) ${JSON.stringify(params)}`);

    const result = await vehicleService.edit(params);
    logger.info(`(vehicle.update.result) ${JSON.stringify(result)}`);

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
    logger.info(`(vehicle.delete.params) ${JSON.stringify(params)}`);

    const result = await vehicleService.delete(params);
    logger.info(`(vehicle.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
