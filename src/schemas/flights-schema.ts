import Joi from 'joi';

const aircraftSchema = Joi.object({
    name: Joi.string().required(),
    registration: Joi.string().required(),
    airline: Joi.string().required(),
});

const routeSchema = Joi.object({
  from: Joi.string().required(),
  to: Joi.string().required(),
});

const flightDataSchema = Joi.object({
  date: Joi.date().iso().required(),
  balance: Joi.number().required(),
  route: routeSchema.required(),
  xp: Joi.number().required(),
  missionBonus: Joi.number().required(),
});

const flightSchema = Joi.object({
  id: Joi.string().required(),
  aircraft: aircraftSchema.required(),
  flightData: flightDataSchema.required(),
});

const flightsResponseSchema = Joi.object({
  flights: Joi.array().items(flightSchema).required(),
});

export { flightsResponseSchema, flightSchema, flightDataSchema, routeSchema, aircraftSchema };