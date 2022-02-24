const { Op } = require('sequelize');
const { Vehicle, VehicleRecord } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      VehicleRecord.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    if (params.vehicle_no) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.vehicle_no}%` }, // like검색
      };
    }
    if (params.vehicle_no) {
      setQuery.where = {
        ...setQuery.where,
        vehicle_no: params.vehicle_no, // '='검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      VehicleRecord.findAndCountAll({
        ...setQuery,
        include: [
          {
            model: Vehicle,
            as: 'Vehicle',
            attributes: ['vehicle_no'],
          },
        ],
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      VehicleRecord.findByPk(
        params.id,
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      VehicleRecord.update(
        params,
        {
          where: { vehicleid: params.vehicleid },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      VehicleRecord.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
