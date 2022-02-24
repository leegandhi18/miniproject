const { sequelize } = require('./connection');
const User = require('./user');
const Vehicle = require('./Vehicle');
const Board = require('./board');
const Comment = require('./comment');
const VehicleRecord = require('./VehicleRecord');
const Reservation = require('./Reservation');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.Vehicle = Vehicle;
db.Board = Board;
db.Comment = Comment;
db.VehicleRecord = VehicleRecord;
db.Reservation = Reservation;

// model init
User.init(sequelize);
Vehicle.init(sequelize);
Board.init(sequelize);
Comment.init(sequelize);
VehicleRecord.init(sequelize);
Reservation.init(sequelize);

// association(관계 생성)
User.associate(db);
Vehicle.associate(db);
Board.associate(db);
Comment.associate(db);
VehicleRecord.associate(db);
Reservation.associate(db);

module.exports = db;
