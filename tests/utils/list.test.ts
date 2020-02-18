import { head, tail } from "../../src/utils/list";

describe("List", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("should get first element of the list", function() {
    expect(head(list)).toEqual(1);
  });

  it("should get tail of list", function() {
    expect(tail(list)).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    expect(tail([])).toEqual([]);
  });
});
