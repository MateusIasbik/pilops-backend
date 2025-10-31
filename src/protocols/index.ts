type Aircraft = {
  name: string;
  registration: string;
  airline: string;
};

type Route = {
  from: string;
  to: string;
};

type FlightData = {
  date: string;
  balance: number;
  route: Route;
  xp: number;
  missionBonus: number;
};

type Flight = {
  id: string;
  aircraft: Aircraft;
  flightData: FlightData;
};

type FlightsResponse = {
  flights: Flight[];
};

export { Aircraft, Route, FlightData, Flight, FlightsResponse };