// authController.js
const jwt = require('jsonwebtoken');
const users = require("../data/users")

/**
 * This function handles the login process. It checks the provided
 * username and password against a predefined list of users. If the
 * credentials are valid, it generates a JSON Web Token (JWT) and sends
 * it back as a response.
 * 
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
async function login(req, res) {
  const { username, password } = req.body;
  // Simulated user data (In a real application, this should come from a database)
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication is failed!!!' });
  }

  // Generate a JWT with the user's ID
  const token = jwt.sign({ id: user.id }, 'privateKey', { expiresIn: '1h' });
  res.json({ message: 'Authentication is success!!!', token });
}

module.exports = { login };
