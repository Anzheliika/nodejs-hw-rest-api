const Joi = require('joi');

const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const subscriptionList = ['starter', 'pro', 'business'];

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
};
