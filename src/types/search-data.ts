export enum TravelType {
  ONE_WAY = 1,
  ROUND_TRIP = 2,
};

export type SearchData = {
  travelType: TravelType,
  passengers: number, // 1..10
  departure: string,
  arrival: string,
  dateDeparture: number, // Всегда больше чем Date.now()
  dateArrival: number, // Только дляROUND_TRIP. Всегда больше чем dateDeparture
};
