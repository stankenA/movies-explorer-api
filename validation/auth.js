const { Joi, celebrate } = require('celebrate');

const validationForLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  }),
});

const validationForRegistration = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).max(30),
  }),
});

module.exports = {
  validationForLogin,
  validationForRegistration,
};
