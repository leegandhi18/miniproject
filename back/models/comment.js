const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment_no: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      comment: {
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
    db.Comment.belongsTo(db.User, { targetKey: 'id', foreignKey: { name: 'userid', onDelete: 'SET NULL', as: 'Users' } });
    db.Comment.belongsTo(db.Board, { targetKey: 'id', foreignKey: { name: 'boardid', onDelete: 'SET NULL', as: 'Boards' } });
  }
};
