const express = require('express');
const bodyParser = require('body-parser'); // Importing bodyParser.
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Adding bodyParser as middleware.
app.use(bodyParser.json());

// Home page
app.get('/', (req, res) => {
  res.send('Welcome!!!');
});

// Adding routes
const authRoutes = require('./routes/authRoutes'); // Importing authRoutes.
const profileRoutes = require('./routes/profileRoutes'); // Importing profileRoutes.
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.listen(port, () => {
  console.log(`Server is working on port ${port}!!!`);
});

module.exports = app;
