import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().required(),
  OPENAI_API_KEY: Joi.string().required(),
});
