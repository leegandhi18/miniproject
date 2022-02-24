const Sequelize = require('sequelize');

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      board_no: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
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
    db.Board.belongsTo(db.User, { targetKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Users' } });
    db.Board.hasMany(db.Comment, { sourceKey: 'id', foreignKey: { name: 'boardid', onDelete: 'SET NULL', as: 'Comments' } });
  }
};
