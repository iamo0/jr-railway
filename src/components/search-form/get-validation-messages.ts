import { now, roundDate } from "@/helpers/round-date";
import { TravelType } from "../../types/search-data";

interface SearchData {
  travelType: TravelType,
  passengers: number,
  departure: string,
  arrival: string,
  dateDeparture: number,
  dateArrival: number,
}

export default function getValidationMessages(searchData: SearchData) {
  return [
    () => searchData.passengers < 0 ? "Too few passengers" : null,
    () => searchData.passengers > 10 ? "Too many passengers" : null,
    () => searchData.departure.trim() === "" ? "Departure place is not set" : null,
    () => searchData.arrival.trim() === "" ? "Travel destination is not set" : null,
    () => searchData.arrival === searchData.departure && searchData.arrival.trim() !== "" ? "Destination couldn't be the same place as departure place" : null,
    () => searchData.dateDeparture && roundDate(searchData.dateDeparture) < now() ? "Departure date is in the past" : null,
    () => searchData.travelType === TravelType.ROUND_TRIP && searchData.dateArrival < searchData.dateDeparture ? "Arrival date should be after departure date" : null,
  ]
    .map((f) => f())
    .filter(m => m);
}
