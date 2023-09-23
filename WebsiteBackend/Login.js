const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

// Use express's built-in middleware to parse JSON bodies
app.use(express.json());

// Dummy in-memory database
const db = [
  {
    username: 'john',
    password: '$2b$10$74TgbEKgOohusghNv/EoDuASGgQEMFdLwYqOpaQLGPV.zhRqlGQkO' // hashed 'password'
  }
];

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Logging for debugging purposes (IMPORTANT: Don't do this in production!)
    console.log("Received:", { username, password });

    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    const user = db.find(u => u.username === username);
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // Generate and send token (not implemented here)
      return res.status(200).send('Logged in');
    } else {
      return res.status(400).send('Invalid credentials');
    }
  } catch (error) {
    console.error("Error during login:", error);  // Log the error for debugging
    return res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
