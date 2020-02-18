// 1.04 (*) Find the number of elements of a list.

import { head, tail } from "../utils/list";

export function listLength<T>(list: T[]): number {
  return list.length;
}

export function listLengthRecursive<T>(list: T[]): number {
  const recLength = (innerList: T[], countedElements: number): number => {
    return !head(innerList)
      ? countedElements
      : recLength(tail(innerList), countedElements + 1);
  };
  return recLength(list, 0);
}
