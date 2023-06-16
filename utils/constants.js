const REGEXP_URL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const allowedCors = [
  'http://api.movies-exporer.nomoredomains.rocks',
  'https://api.movies-exporer.nomoredomains.rocks',
  'localhost:3000',
  'http://localhost:3000',
];

module.exports = {
  REGEXP_URL,
  allowedCors,
};
