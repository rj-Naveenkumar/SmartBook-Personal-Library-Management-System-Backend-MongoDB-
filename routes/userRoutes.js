const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  console.log('Request body:', req.body);  // <-- Add this to debug

  const { username, email, password } = req.body;

  try {    // <-- If the username or email already exists in the database, it will reject the registration request.
    const exists = await User.findOne({ $or: [{ username }, { email }] });
    if (exists) return res.status(400).json({ error: 'User already exists' });

    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error(err); // Log the full error too
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
