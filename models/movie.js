const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  direcotr: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value, {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: true,
      }),
      message: 'Должен быть введён корректны URL адрес',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value, {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: true,
      }),
      message: 'Должен быть введён корректны URL адрес',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value, {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: true,
      }),
      message: 'Должен быть введён корректны URL адрес',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: String,
    required: true,
    unique: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
