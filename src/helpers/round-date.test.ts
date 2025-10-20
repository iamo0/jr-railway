import { now, roundDate } from "./round-date";

describe("Test round date creation", function() {
  it("now() creates timestamp representing current date with reset hours, minutes and seconds", function() {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(1988, 7, 23, 23, 50, 10, 123));

    expect(now()).toEqual(new Date(1988, 7, 23, 0, 0, 0, 0).getTime());
  });
});

describe("Date round", function() {
  describe("roundDate creates timestamp representimg passed date with reset hours, minutes and seconds", function() {
    it("Date", function() {
      expect(roundDate(new Date(2020, 5, 15, 12, 30, 45, 678))).toEqual(new Date(2020, 5, 15, 0, 0, 0, 0).getTime());
    });

    it("string", function() {
      expect(roundDate("2020-06-15")).toEqual(new Date(2020, 5, 15, 0, 0, 0, 0).getTime());
    });

    it("number", function() {
      expect(roundDate(new Date(2020, 5, 15, 18, 45, 30, 123).getTime())).toEqual(new Date(2020, 5, 15, 0, 0, 0, 0).getTime());
    });
  });
});
