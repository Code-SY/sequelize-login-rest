const Sequelize = require('sequelize');
const config = require('./config');

const db = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  config.db.details,
);

module.exports = db;