const usersRouter = require('express').Router();
const {
  getUsers,
} = require('../controllers/users');
// const {

// } = require('../validation/users');

usersRouter.get('/', getUsers);

module.exports = usersRouter;
