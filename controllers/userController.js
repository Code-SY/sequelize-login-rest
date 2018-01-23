const User = require('../models/User');

const UserController = {};

/* Get all users */
UserController.getAllUsers = (req, res) => {
  User.findAll({
    where: req.query,
    attributes: ['id', 'username', 'email', 'createdAt', 'updatedAt'],
  })
    .then((users) => {
      res.json(users);
    }).catch((error) => {
      res.json(error);
    });
};


/* Get a user */
UserController.getUserById = (req, res) => {
  User.findOne({
    where: {id: req.user.id},
    attributes: ['id', 'username', 'email', 'updatedAt', 'createdAt'],
  }).then((users) => {
    res.json(users);
  }).catch((error) => {
    res.json(error);
  });
};

module.exports = UserController;
