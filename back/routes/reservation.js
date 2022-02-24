const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const reservationService = require('../service/reservationService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      userid: req.body.userid,
      vehicleid: req.body.vehicleid,
      reservation_no: req.body.reservation_no,
      reservation_place: req.body.reservation_place,
      reservation_detail: req.body.reservation_detail,
      reservation_time: req.body.reservation_time,
    };
    logger.info(`(reservation.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.userid) {
      const err = new Error('Not allowed null (userid)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await reservationService.reg(params);
    logger.info(`(reservation.reg.result) ${JSON.stringify(result)}`);

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
    logger.info(`(reservation.list.params) ${JSON.stringify(params)}`);

    const result = await reservationService.list(params);
    logger.info(`(reservation.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(reservation.info.params) ${JSON.stringify(params)}`);

    const result = await reservationService.info(params);
    logger.info(`(reservation.info.result) ${JSON.stringify(result)}`);

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
      vehicleid: req.body.vehicleid,
      reservation_no: req.body.reservation_no,
      reservation_place: req.body.reservation_place,
      reservation_detail: req.body.reservation_detail,
      reservation_time: req.body.reservation_time,
    };
    logger.info(`(reservation.update.params) ${JSON.stringify(params)}`);

    const result = await reservationService.edit(params);
    logger.info(`(reservation.update.result) ${JSON.stringify(result)}`);

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
    logger.info(`(reservation.delete.params) ${JSON.stringify(params)}`);

    const result = await reservationService.delete(params);
    logger.info(`(reservation.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
