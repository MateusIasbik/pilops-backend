import { Request, Response } from "express";
import { flightsService } from "../services/flights-service";
import { badRequestError } from "../errors/error";

async function getAllFlights(req: Request, res: Response) {
    const flights = flightsService.getAllFlights();
    res.status(200).send(flights);
}

async function getFlightById(req: Request, res: Response) {
    const { id } = req.params;
    const flight = flightsService.getFlightById(id);
    res.status(200).send(flight);
}

async function getTotalBalanceByAircraft(req: Request, res: Response) {
    const { field, value } = req.query;

    if (!field || !value || typeof field !== "string" || typeof value !== "string") {
        throw badRequestError("Query parameters 'field' and 'value'");
    }

    const totalBalance = flightsService.getTotalBalanceByAircraft(
        field as 'name' | 'registration' | 'airline',
        value
    );

    res.status(200).send({ totalBalance });
}

export const flightsController = {
    getAllFlights,
    getFlightById,
    getTotalBalanceByAircraft
}


