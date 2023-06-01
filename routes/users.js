const usersRouter = require('express').Router();
const {
  getUsers,
  getCurrentUser,
  updateUser,
} = require('../controllers/users');
// const {

// } = require('../validation/users');

usersRouter.get('/', getUsers);
usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', updateUser);

module.exports = usersRouter;
