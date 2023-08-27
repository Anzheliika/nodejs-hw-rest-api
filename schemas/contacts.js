const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  email: Joi.string()
    .regex(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    .required(),
  phone: Joi.string()
    .regex(/^\(?([0-9]{3})\) [0-9]{3}-[0-9]{4}$/)
    .required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { addSchema, updateFavoriteSchema };
