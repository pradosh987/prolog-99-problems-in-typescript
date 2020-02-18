// 1.02 (*) Find the last but one element of a list.
// (de: zweitletztes Element, fr: avant-dernier élément)

import { head, tail } from "../utils/list";

export function secondLast<T>(list: T[]): T {
  return list[list.length - 2];
}

export function secondLastRecursive<T>(list: T[]): T {
  return tail(list).length === 1 ? head(list) : secondLastRecursive(tail(list));
}
