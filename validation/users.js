const { Joi, celebrate } = require('celebrate');

const validationForUserInfo = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

module.exports = {
  validationForUserInfo,
};
