const moviesRouter = require('express').Router();
const {
  getAllMovies,
  createNewMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  validationForNewMovie,
  validationForMovieId,
} = require('../validation/movies');

moviesRouter.get('/', getAllMovies);
moviesRouter.post('/', validationForNewMovie, createNewMovie);
moviesRouter.delete('/:id', validationForMovieId, deleteMovie);

module.exports = moviesRouter;
