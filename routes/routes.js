const router = require('express').Router();
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const {
  login,
  createUser,
} = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', createUser);
router.post('/signin', login);

router.use(auth);

router.use('/users', usersRouter);
router.use((req, res, next) => {
  next(new NotFoundError('404 страница не найдена'));
});

module.exports = router;
