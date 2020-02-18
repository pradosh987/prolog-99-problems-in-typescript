import { last, lastRecursive } from "../../src/lists/P01";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("P01", function() {
  it("should get last element", function() {
    expect(last(list)).toEqual(9);
  });

  it("should get last element using recursion", function() {
    expect(lastRecursive(list)).toEqual(9);
  });
});
