const { GenerateToken } = require('../auth/jwt.js');
const db = require('../database/models/index.js');
const bcrypt = require('bcrypt');

const User = db.users;

/// for SIGNUP//

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log('username', username);

    // Check if the user already exists
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(409).json({ message: 'User already exists' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashedPassword', hashedPassword);

    // Create a new user
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('password', password);

    // Find the user by username
    const user = await User.findOne({ where: { username: username } });
    console.log('user', user.password);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    const token = await GenerateToken(user.email, password);

    res.status(200).json({
      message: 'User signed in successfully',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    // Find the user by id
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user
    await user.update({
      username: username,
      email: email,
      password: password,
    });

    res.status(200).json({
      message: 'User updated successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllUsers,
  register,
  updateUser,
  logIn,
};
