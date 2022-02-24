const Sequelize = require('sequelize');

module.exports = class Reservation extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      reservation_no: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      reservation_place: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },
      reservation_detail: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      reservation_time: {
        type: Sequelize.DATE,
        allowNull: false,
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
    db.Reservation.belongsTo(db.User, { targetKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Users' } });
    db.Reservation.belongsTo(db.Vehicle, { targetKey: 'id', foreignKey: { name: 'vehicleid', onDelete: 'SET NULL', as: 'Vehicles' } });
  }
};
