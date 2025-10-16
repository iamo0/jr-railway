import sort from "./sort";

describe("Sorting numbers", function() {
  it("Values are sorted not in lexicographic order", function() {
    const initialArray = [1, 3, 2, 10];
    const sortedArray = sort(...initialArray);

    expect(sortedArray).toEqual([1, 2, 3, 10]);
  });
});
