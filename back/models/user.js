const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userid: {
        type: Sequelize.STRING(300),
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      auth: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      age: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(400),
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
    db.User.hasMany(db.Vehicle, { sourceKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Vehicles' } });
    db.User.hasMany(db.Board, { sourceKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Boards' } });
    db.User.hasMany(db.Comment, { sourceKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Comments' } });
    db.User.hasMany(db.Reservation, { sourceKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Reservations' } });
  }
};
