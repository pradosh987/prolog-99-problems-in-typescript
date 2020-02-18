// 1.06 (*) Find out whether a list is a palindrome.
//   A palindrome can be read forward or backward; e.g. [x,a,m,a,x].

export function isPalindrome<T>(list: T[]): boolean {
  const mid = list.length / 2;
  return list.every((ele: T, index: number) => {
    return index >= mid || ele === list[list.length - index - 1];
  });
}
