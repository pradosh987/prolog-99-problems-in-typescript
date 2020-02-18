import { secondLast, secondLastRecursive } from "../../src/lists/P02";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("P02", function() {
  it("should get last but one element of list", function() {
    expect(secondLast(list)).toEqual(8);
  });

  it("should get last but one element of list using recursion", function() {
    expect(secondLastRecursive(list)).toEqual(8);
  });
});
