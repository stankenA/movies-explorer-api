const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');

const { JWT_SECRET, NODE_ENV } = process.env;

const getUsers = async (req, res, next) => {
  try {
    const response = await User.find({});
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const response = await User.findById(req.user._id);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const {
    email,
    password,
    name,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    const userInfo = newUser.toObject();
    delete userInfo.password;

    res.send(userInfo);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Некорректно переданы данные нового пользователя'));
    } else if (err.code === 11000) {
      next(new ConflictError('Пользователь с таким e-mail уже существует'));
    } else {
      next(err);
    }
  }
};

const updateUser = async (req, res, next) => {
  const { email, name } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { email, name },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedUser) {
      throw new NotFoundError('Пользователь с таким id не найден');
    }

    res.send(updatedUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Некорректно переданы данные пользователя'));
    } else {
      next(err);
    }
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });

    res.send({ jwt: token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getCurrentUser,
  createUser,
  updateUser,
  login,
};
