import { formatToYYYYMMDD } from "./date-format";

describe("Date formatting helpers", function() {
  it("Should format date to YYYY-MM-DD", function() {
    const dateToFormat = new Date(2020, 5, 1, 23, 55, 12, 123);
    const formattedDate = formatToYYYYMMDD(dateToFormat);
    expect(formattedDate).toEqual("2020-06-01");
  });
});
