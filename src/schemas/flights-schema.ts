import joi from 'joi';

const aircraftSchema = joi.object({
    name: joi.string().required(),
    registration: joi.string().required(),
    airline: joi.string().required(),
});

const routeSchema = joi.object({
  from: joi.string().required(),
  to: joi.string().required(),
});

const flightDataSchema = joi.object({
  date: joi.date().iso().required(),
  balance: joi.number().required(),
  route: routeSchema.required(),
  xp: joi.number().required(),
  missionBonus: joi.number().required(),
});

const flightSchema = joi.object({
  id: joi.string().required(),
  aircraft: aircraftSchema.required(),
  flightData: flightDataSchema.required(),
});

const flightsResponseSchema = joi.object({
  flights: joi.array().items(flightSchema).required(),
});

export { flightsResponseSchema, flightSchema, flightDataSchema, routeSchema, aircraftSchema };