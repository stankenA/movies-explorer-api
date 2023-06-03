const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const {
  login,
  createUser,
} = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');
const {
  validationForRegistration,
  validationForLogin,
} = require('../validation/auth');

router.post('/signup', validationForRegistration, createUser);
router.post('/signin', validationForLogin, login);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use((req, res, next) => {
  next(new NotFoundError('404 страница не найдена'));
});

module.exports = router;
