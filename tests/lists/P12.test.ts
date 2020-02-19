import { encodeModified } from "../../src/lists/P11";
import { decode } from "../../src/lists/P12";

const list = [[4, 1], 2, [2, 3], [2, 1], 4, [4, 5]];

describe("P12", function() {
  it("should decode list", function() {
    expect(decode(list)).toEqual([1, 1, 1, 1, 2, 3, 3, 1, 1, 4, 5, 5, 5, 5]);
  });
});
