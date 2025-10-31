import express, { Request, Response } from 'express';
import flightsRouter from "./routers/flights-router.js";
import errorHandlingMiddleware from "./middlewares/errors-middleware.js";

const app = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.send('Backend Pilops funcionando!');
});

app.use("/flights", flightsRouter);

app.use(errorHandlingMiddleware);

export default app;