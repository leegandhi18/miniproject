const { Op } = require('sequelize');
const { User, Vehicle, Reservation } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      Reservation.create(params).then((inserted) => {
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
    if (params.userid) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.userid}%` }, // like검색
      };
    }
    if (params.reservation_place) {
      setQuery.where = {
        ...setQuery.where,
        reservation_place: params.reservation_place, // '='검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      Reservation.findAndCountAll({
        ...setQuery,
        include: [
          {
            model: User,
            as: 'User',
            attributes: ['userid', 'name'],
          },
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
      Reservation.findByPk(
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
      Reservation.update(
        params,
        {
          where: { userid: params.userid },
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
      Reservation.destroy({
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
