import { pack } from "../../src/lists/P09";

const list = [1, 1, 1, 1, 2, 3, 3, 1, 1, 4, 5, 5, 5, 5];

describe("P09", function() {
  it("should pack list", function() {
    expect(pack(list)).toEqual([
      [1, 1, 1, 1],
      [2],
      [3, 3],
      [1, 1],
      [4],
      [5, 5, 5, 5]
    ]);
  });
});
