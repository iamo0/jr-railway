import { addLeadingZero } from "./number-format";

describe("Number formatting helpers", function () {
  describe("Add leading zero", function () {
    it("Adds leading zero to one-digit number", function () {
      const value = 1;
      const valueWithLeadingZeroes = addLeadingZero(value);
      expect(valueWithLeadingZeroes).toEqual("01");
    });

    it("If given number is bigger or equal than 10, returns stringified value as it is", function() {
      const value = 10;
      const valueWithLeadingZeroes = addLeadingZero(value);
      expect(valueWithLeadingZeroes).toEqual("10");

      const val = 100;
      const valWithLeadingZeroes = addLeadingZero(val);
      expect(valWithLeadingZeroes).toEqual("100");
    });
  });
});
