// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * This route handles user login. When a POST request is made to "/login",
 * it calls the "login" function from the authController module.
 */
router.post('/login', authController.login);

module.exports = router;
