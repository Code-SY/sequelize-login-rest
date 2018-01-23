// The User model.
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const config = require('../config');
const db = require('../database');

var modelDefinition = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
};

const modelOptions = {
  instanceMethods: {
    comparePasswords: comparePasswords,
  },
  hooks: {
    beforeValidate: hashPassword
  },
};

const UserModel = db.define('User', modelDefinition, modelOptions);

// Compare passwords
function comparePasswords(password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    }

    return callback(null, isMatch);
  });
}

// Hash the password
function hashPassword(user) {
  if (user.changed('password')) {
    return bcrypt.hash(user.password, 10).then(function (password) {
      user.password = password;
    });
  }
}

module.exports = UserModel;
