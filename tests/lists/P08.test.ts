import { compress } from "../../src/lists/P08";

const list = [2, 1, 1, 3, 3, 3, 6, 6, 6, 1, 1, 1, 6, 2, 2];

describe("P08", function() {
  it("should compress list", function() {
    expect(compress(list)).toEqual([2, 1, 3, 6, 1, 6, 2]);
  });
});
