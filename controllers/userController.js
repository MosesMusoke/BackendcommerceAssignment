const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const { createUser, findUserByEmail } = require('../models/user');

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Creating a new user
    const user = await createUser(username, email, hashedPassword);

    console.log(user)
    // Generating a JWT token to allow authenticated user access
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {expiresIn:'3d'});
    console.log(token)

    res.status(201).json({ message: 'User registered successfully', user, token });
  } catch (error) {
    res.status(500).json({ error: 'User registration failed' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Finding the user by email
  const user = await findUserByEmail(email);

  const comparePasswords = await bcrypt.compare(password, user.password)

  if (user && comparePasswords) {
    // Generating a JWT token only if the user exists and their password is verified
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {expiresIn:'3d'});
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { signup, login };


