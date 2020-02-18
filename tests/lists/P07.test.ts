import { flatten } from "../../src/lists/P07";

describe("P07", function() {
  it("should flatten a nested list", function() {
    const list = [1, 2, [5], [4, [5, 1], 5], 5];
    const flattenList = [1, 2, 5, 4, 5, 1, 5, 5];
    expect(flatten(list)).toEqual(flattenList);
  });
});
