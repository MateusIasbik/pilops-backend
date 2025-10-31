import { Router } from 'express';
import { flightsController } from '../controllers/flights-controller.js';

const flightsRouter = Router();

flightsRouter.get('/', flightsController.getAllFlights);
flightsRouter.get('/total-balance/aircraft', flightsController.getTotalBalanceByAircraft);
flightsRouter.get('/:id', flightsController.getFlightById);

export default flightsRouter;
