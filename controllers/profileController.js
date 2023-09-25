// profileController.js

/**
 * This function handles the profile page. It serves as an example of a
 * protected route that requires authentication. Only users with a valid
 * JWT can access this route.
 * 
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
async function getProfile(req, res) {
  res.json({ message: 'Profile page' });
}

module.exports = { getProfile };
