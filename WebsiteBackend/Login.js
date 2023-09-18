const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Dummy in-memory database
const db = [
  {
    username: 'john',
    password: '$2b$10$TgjkEOr.PV6FjYBzlFMyUubwmYX1CixYrRPMa27AAMZ38an.Gl9Xe' // hashed 'password'
  }
];

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  const user = db.find(u => u.username === username);
  if (!user) {
    return res.status(400).send('User not found');
  }

  const match = await bcrypt.compare(password, user.password);
  if (match) {
    // Generate and send token (not implemented here)
    return res.status(200).send('Logged in');
  } else {
    return res.status(400).send('Invalid password');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
