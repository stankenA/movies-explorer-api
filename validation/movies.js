const { Joi, celebrate } = require('celebrate');
const { REGEXP_URL } = require('../utils/constants');

const validationForNewMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(new RegExp(REGEXP_URL)),
    trailerLink: Joi.string().required().regex(new RegExp(REGEXP_URL)),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().regex(new RegExp(REGEXP_URL)),
    movieId: Joi.number().required(),
  }),
});

const validationForMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  validationForNewMovie,
  validationForMovieId,
};
