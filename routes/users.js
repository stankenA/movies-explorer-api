const usersRouter = require('express').Router();
const {
  getUsers,
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', updateUser);

module.exports = usersRouter;
