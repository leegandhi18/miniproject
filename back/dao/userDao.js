const { Op } = require('sequelize');
const { User } = require('../models/index');

const dao = {
  // 사용자 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      User.create(params).then((inserted) => {
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
    if (params.name) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name}%` }, // like검색
      };
    }
    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        id: params.id, // '='검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      User.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['password'] }, // password 필드 제외
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
      User.findByPk(
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
      User.update(
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
      User.destroy({
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
