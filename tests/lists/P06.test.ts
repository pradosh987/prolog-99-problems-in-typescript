import { isPalindrome } from "../../src/lists/P06";

const list = [1, 2, 3, 2, 1];
const list2 = [1, 2, 3, 3, 2, 1];
const list3 = [1, 2, 3, 4, 2, 1];

describe("P04", function() {
  it("should find out whether a list is a palindrome", function() {
    expect(isPalindrome(list)).toBeTruthy();
    expect(isPalindrome(list2)).toBeTruthy();
    expect(isPalindrome(list3)).toBeFalsy();
  });
});
