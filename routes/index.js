const express = require('express');

const passport = require('passport');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// user routes
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUserById);
router.get('/users', passport.authenticate('jwt', { session: false }), userController.getAllUsers);
router.post('/login', authController.authenticateUser);
router.post('/signup', authController.signUp);

module.exports = router;
