import { encodeModified } from "../../src/lists/P11";

const list = [1, 1, 1, 1, 2, 3, 3, 1, 1, 4, 5, 5, 5, 5];

describe("P11", function() {
  it("should modify encoded list", function() {
    expect(encodeModified(list)).toEqual([
      [4, 1],
      2,
      [2, 3],
      [2, 1],
      4,
      [4, 5]
    ]);
  });
});
