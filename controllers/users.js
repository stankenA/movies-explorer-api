// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const NotFoundError = require('../errors/NotFoundError');
// const BadRequestError = require('../errors/BadRequestError');
// const ConflictError = require('../errors/ConflictError');

// const { JWT_SECRET, NODE_ENV } = process.env;

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

module.exports = {
  getUsers,
};
