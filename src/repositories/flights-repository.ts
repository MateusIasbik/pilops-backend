import flightsData from "../../data/flightHistory.json";
import { Flight } from "../protocols";

const flights: Flight[] = flightsData.flights;

function getAllFlights(): Flight[] {
    return flights;
}

function getFlightById(id: string): Flight | undefined {
    const flight = flights.find(flight => flight.id === id);
    return flight;
}

export const flightsRepository = {
    getAllFlights,
    getFlightById
}

