// authMiddleware.js
const jwt = require('jsonwebtoken');

/**
 * This middleware function is used to authenticate incoming requests.
 * It checks if the request contains a valid JWT (JSON Web Token) in
 * the "Authorization" header. If the token is valid, it allows the
 * request to proceed; otherwise, it returns a 401 Unauthorized response.
 * 
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next() function to pass control to the next middleware.
 */
async function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Authorization is failed!!!' });

  jwt.verify(token, 'privateKey', (err, user) => {
    if (err) return res.status(403).json({ message: 'Authorization is success!!!' });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
