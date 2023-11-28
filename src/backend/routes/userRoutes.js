// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to handle user registration
router.post('/signup', async (req, res) => {
  try {
    const { userName, email, password, gender, contactNumber } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user
    const newUser = new User({ userName, email, password, gender, contactNumber });
    await newUser.save();

    // Respond with the newly created user data
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// routes/userRoutes.js
router.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ userName, password });


    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




module.exports = router;
