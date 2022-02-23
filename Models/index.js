const {Sequelize, DataTypes} = require('sequelize');
const { sequelize} = require('../database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.UserModel = require('./UserModel')(sequelize, DataTypes);
db.CategoryModel = require('./CategoryModel')(sequelize, DataTypes);
db.BrandModel = require('./BrandModel')(sequelize, DataTypes);
db.ProductModel = require('./ProductModel')(sequelize, DataTypes);
db.OrderModel = require('./OrderModel')(sequelize, DataTypes);
db.OrderItem = require('./OrderItem')(sequelize, DataTypes);
db.UserModel.hasMany(db.OrderModel);
db.OrderModel.belongsTo(db.UserModel);
db.OrderModel.hasMany(db.OrderItem);
db.OrderItem.belongsTo(db.OrderModel);
db.OrderItem.belongsTo(db.ProductModel);

db.ProductModel.belongsTo(db.BrandModel);
db.ProductModel.belongsTo(db.CategoryModel);

module.exports = db;
