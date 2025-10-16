import clamp from "./clamp";

describe("Basic functionality", function () {
  it(
    "Clamp function returns value as it is if it's bigger than minimal value and lower than maximal value",
    function () {
      const initialValue = 0;
      const clampedValue = clamp(initialValue, -Infinity, Infinity);

      expect(clampedValue).toBe(initialValue);
    }
  );

  it(
    "Clamp function returns minimal value if passed value is lower than minimal",
    function () {
      const initialValue = -Infinity;
      const minValue = 0;
      const clampedValue = clamp(initialValue, minValue, Infinity);
      if (clampedValue !== minValue) {
        throw new Error("");
      }
    }
  );

  it(
    "Clamp function returns maximal value if passed value is bigger than maximal",
    function () {
      const initialValue = Infinity;
      const maxValue = 100;
      const clampedValue = clamp(initialValue, -Infinity, maxValue);
      if (clampedValue !== maxValue) {
        throw new Error("");
      }
    }
  );
});
