import { Request, Response } from "express";
import { flightsService } from "../services/flights-service.js";
import httpStatus from "http-status";

async function getAllFlights(req: Request, res: Response) {
    const flights = flightsService.getAllFlights();
    res.status(httpStatus.OK).send(flights);
}

async function getFlightById(req: Request, res: Response) {
    const { id } = req.params;
    const flight = flightsService.getFlightById(id);
    res.status(httpStatus.OK).send(flight);
}

async function getTotalBalanceByAircraft(req: Request, res: Response) {
    const { field, value } = req.query;

    if (!field || !value || typeof field !== "string" || typeof value !== "string") {
        return res.status(httpStatus.BAD_REQUEST)
            .send({ message: "Query parameters 'field' and 'value' are required" });
    }

    const totalBalance = flightsService.getTotalBalanceByAircraft(
        field as 'name' | 'registration' | 'airline',
        value
    );

    res.status(httpStatus.OK).send({ totalBalance });
}

export const flightsController = {
    getAllFlights,
    getFlightById,
    getTotalBalanceByAircraft
}


