import { Flight } from "../protocols";
import { flightsRepository } from "../repositories/flights-repository";
import { notFoundError } from "../errors/error";

function getAllFlights(): Flight[] {
    const flights = flightsRepository.getAllFlights();

    if(!flights || flights.length === 0) {
        throw notFoundError('Flights');
    }

    return flights;
}

function getFlightById(id: string): Flight {
    const flight = flightsRepository.getFlightById(id);

    if(!flight) {
        throw notFoundError(`Flight with id ${id}`);
    }

    return flight;
}

function getTotalBalanceByAircraft(
    field: 'name' | 'registration' | 'airline',
    value: string
): number {
    const allFlights = flightsRepository.getAllFlights();
    const filteredFlights = allFlights.filter(flight =>
        flight.aircraft[field] === value);

    if (filteredFlights.length === 0) {
        throw notFoundError(`Flights with ${field} "${value}"`);
    }

    return filteredFlights.reduce((total, flight) =>
        total + flight.flightData.balance, 0)
}

export const flightsService = {
    getAllFlights,
    getFlightById,
    getTotalBalanceByAircraft
}