import { reverse, reverseUsingRecursion } from "../../src/lists/P05";

const list = [1, 2, 3, 4, 5];
const reversedList = [5, 4, 3, 2, 1];

describe("P05", function() {
  it("should reverse a list", function() {
    expect(reverse(list)).toEqual(reversedList);
  });

  it("should reverse a list using recursion", function() {
    expect(reverseUsingRecursion(list)).toEqual(reversedList);
  });
});
