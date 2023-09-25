// profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authenticateToken = require('../middlewares/authMiddleware');

/**
 * This route represents a protected route. It requires authentication
 * using the "authenticateToken" middleware. Only users with a valid JWT
 * can access this route.
 */
router.get('/', authenticateToken, profileController.getProfile);

module.exports = router;
