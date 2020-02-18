// 1.03 (*) Find the K'th element of a list.
// The first element in the list is number 1.
// Example:
//     ?- element_at(X,[a,b,c,d,e],3).
//     X = c

import { head, tail } from "../utils/list";

export function elementAt<T>(list: T[], at: number): T {
  return list[at - 1];
}

export function elementAtRecursive<T>(list: T[], at: number): T {
  return at === 1 ? head(list) : elementAtRecursive(tail(list), at - 1);
}
