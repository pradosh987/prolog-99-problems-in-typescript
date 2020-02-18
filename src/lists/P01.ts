// 1.01 (*) Find the last element of a list.
//   Example:
//   ?- my_last(X,[a,b,c,d]).
//     X = d

import { head, tail } from "../utils/list";

export function last<T>(list: T[]): T {
  return list[list.length - 1];
}

export function lastRecursive<T>(list: T[]): T {
  return tail(list)?.length === 0 ? head(list) : lastRecursive(tail(list));
}
