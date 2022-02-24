const Sequelize = require('sequelize');

module.exports = class Vehicle extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      vehicle_no: {
        type: Sequelize.STRING(400),
        unique: true,
        allowNull: false,
      },
      vehicle_type: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      vehicle_name: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      vehicle_year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fuel_type: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      vehicle_exhaust: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      number_of_passenger: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      drive_distance: {
        type: Sequelize.INTEGER,
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
    db.Vehicle.belongsTo(db.User, { targetKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Users' } });
    db.Vehicle.hasMany(db.VehicleRecord, { sourceKey: 'id', foreignKey: { name: 'vehicleid', onDelete: 'SET NULL', as: 'VehicleRecords' } });
    db.Vehicle.hasMany(db.Reservation, { sourceKey: 'id', foreignKey: { name: 'vehicleid', onDelete: 'SET NULL', as: 'Reservations' } });
  }
};
