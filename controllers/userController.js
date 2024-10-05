const { readUsersFromFile, writeUsersToFile } = require('../models/userModel');

// REGISTER
exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const users = readUsersFromFile();

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: users.length + 1,
    username,
    email,
    password
  };

  users.push(newUser);
    // SAVE TO JSON
  writeUsersToFile(users);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// LOGIN
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'ditwashere';

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();
  
  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // JWT ting
  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
};

exports.getProfile = (req, res) => {
  const users = readUsersFromFile();
  const user = users.find(user => user.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ user });
};
