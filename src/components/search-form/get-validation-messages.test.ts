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
