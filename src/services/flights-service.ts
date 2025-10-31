import { Aircraft, Flight } from "../protocols";
import { flightsRepository } from "../repositories/flights-repository";

function getAllFlights(): Flight[] {
    return flightsRepository.getAllFlights();
}

function getFlightById(id: string): Flight | undefined {
    const flight = flightsRepository.getFlightById(id);
    return flight;
}

function getTotalBalanceByAircraft(
    field: 'name' | 'registration' | 'airline',
    value: string
): number {
    const allFlights = flightsRepository.getAllFlights();
    const filteredFlights = allFlights.filter(flight =>
        flight.aircraft[field] === value);

    return filteredFlights.reduce((total, flight) =>
        total + flight.flightData.balance, 0)
}

export const flightsService = {
    getAllFlights,
    getFlightById,
    getTotalBalanceByAircraft
}