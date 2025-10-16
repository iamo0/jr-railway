import clamp from "./clamp";
import sort from "./sort";

describe("Weird test", function() {
  it("Very weird", function() {
    expect(100 - 3).toEqual(clamp(sort(1, 2, 3, Infinity)[3], -Infinity, 97));
  });
});
