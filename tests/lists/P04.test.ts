import { listLength, listLengthRecursive } from "../../src/lists/P04";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("P04", function() {
  it("should get number of elements of a list.", function() {
    expect(listLength(list)).toEqual(9);
  });
  it("should get number of elements of a list using recursion.", function() {
    expect(listLengthRecursive(list)).toEqual(9);
  });
});
