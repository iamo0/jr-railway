import { TravelType } from "../../types/search-data";
import getValidationMessages from "./get-validation-messages";

describe("Test passengers amount validation message", function () {
  it("Returns error message if passengers amount is less than 0", function () {
    expect(getValidationMessages({
      travelType: TravelType.ROUND_TRIP,
      passengers: -1,
      departure: "Moscow",
      arrival: "Saint Petersburg",
      dateDeparture: Date.now() + 1000,
      dateArrival: Date.now() + 1000 * 100,
    })).toContain("Too few passengers");
  });
});

describe("Test departure date validation message", function () {
  it("Returns error message if departure date is in the past ignoring hours, minutes, seconds and milliseconds", function () {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(1988, 7, 23, 23, 50, 10, 123));

    expect(getValidationMessages({
      dateDeparture: new Date(1988, 7, 23, 0, 0, 0, 0).getTime(),

      travelType: TravelType.ROUND_TRIP,
      passengers: 2,
      departure: "Moscow",
      arrival: "Saint Petersburg",
      dateArrival: Date.now() + 1000 * 100,
    })).not.toContain("Departure date is in the past");


    expect(getValidationMessages({
      dateDeparture: new Date(1988, 7, 22, 0, 0, 0, 0).getTime(),

      travelType: TravelType.ROUND_TRIP,
      passengers: 2,
      departure: "Moscow",
      arrival: "Saint Petersburg",
      dateArrival: Date.now() + 1000 * 100,
    })).toContain("Departure date is in the past");
  });
});
