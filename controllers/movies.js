const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');
const ConflictError = require('../errors/ConflictError');

const getAllMovies = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const movies = await Movie.find({ owner: userId }).populate('owner');
    res.send(movies);
  } catch (err) {
    next(err);
  }
};

const createNewMovie = async (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  try {
    const newMovie = await Movie.create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
      owner: req.user._id,
    });

    res.status(201).send(newMovie);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Некорректно переданы данные о фильме'));
    } else if (err.code === 11000) {
      console.log(err);
      next(new ConflictError('Фильм с таким id уже есть в базе данных'));
    } else {
      next(err);
    }
  }
};

const deleteMovie = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      throw new NotFoundError('Ошибка удаления. Фильм с таким id не найден');
    }

    if (movie.owner._id.toString() !== userId) {
      throw new ForbiddenError('Нельзя удалять чужие фильмы');
    }

    await movie.deleteOne();

    res.send({ message: 'Фильм успешно удалён' });
  } catch (err) {
    if (err.name === 'CastError') {
      next(new BadRequestError('Ошибка удаления. Некорректно введён id'));
    } else {
      next(err);
    }
  }
};

module.exports = {
  getAllMovies,
  createNewMovie,
  deleteMovie,
};
