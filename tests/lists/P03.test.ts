import { elementAt, elementAtRecursive } from "../../src/lists/P03";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("P03", function() {
  it("should get kth element", function() {
    expect(elementAt(list, 5)).toEqual(5);
  });

  it("should get kth element using recursion", function() {
    expect(elementAtRecursive(list, 5)).toEqual(5);
  });
});
