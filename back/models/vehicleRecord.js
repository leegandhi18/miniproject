const Sequelize = require('sequelize');

module.exports = class VehicleRecord extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      fuel_cost: {
        type: Sequelize.STRING(400),
      },
      fuel_liter_cost: {
        type: Sequelize.STRING(300),
      },
      fuel_volume: {
        type: Sequelize.STRING(300),
      },
      fuel_distance: {
        type: Sequelize.INTEGER,
      },
      fuel_type: {
        type: Sequelize.STRING(300),
      },
      repair_detail: {
        type: Sequelize.STRING(500),
      },
      repair_cost: {
        type: Sequelize.STRING(500),
      },
      etc: {
        type: Sequelize.STRING(400),
      },
      etc_cost: {
        type: Sequelize.STRING(400),
      },
    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  static associate(db) {
    db.VehicleRecord.belongsTo(db.Vehicle, { targetKey: 'id', foreignKey: { name: 'vehicleid', onDelete: 'SET NULL', as: 'Vehicles' } });
  }
};
