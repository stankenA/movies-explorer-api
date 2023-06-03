const usersRouter = require('express').Router();
const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');
const {
  validationForUserInfo,
} = require('../validation/users');

usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', validationForUserInfo, updateUser);

module.exports = usersRouter;
