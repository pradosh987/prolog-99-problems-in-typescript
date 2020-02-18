// 1.05 (*) Reverse a list.

import { head, tail } from "../utils/list";

export function reverse<T>(list: T[]): T[] {
  return list.reduce((acc: T[], element: T) => {
    acc.unshift(element);
    return acc;
  }, []);
}

export function reverseUsingRecursion<T>(list: T[]): T[] {
  const reverser = (currentList: T[], reversedList: T[]): T[] => {
    const listHead = head(currentList);
    if (listHead) {
      reversedList.unshift(listHead);
      return reverser(tail(currentList), reversedList);
    }
    return reversedList;
  };
  return reverser(list, []);
}
