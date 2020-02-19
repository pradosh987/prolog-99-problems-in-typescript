import { encode } from "../../src/lists/P10";

const list = [1, 1, 1, 1, 2, 3, 3, 1, 1, 4, 5, 5, 5, 5];

describe("P09", function() {
  it("should pack list", function() {
    expect(encode(list)).toEqual([
      [4, 1],
      [1, 2],
      [2, 3],
      [2, 1],
      [1, 4],
      [4, 5]
    ]);
  });
});
