import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().allow(null).required(),
  contactType: Joi.string().valid('personal', 'work').required(),
  isFavourite: Joi.boolean().required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email().allow(null),
  contactType: Joi.string().valid('personal', 'work'),
  isFavourite: Joi.boolean(),
});
