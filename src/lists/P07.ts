// 1.07 (**) Flatten a nested list structure.
//   Transform a list, possibly holding lists as elements into a 'flat' list by replacing each list with its elements (recursively).
//
//   Example:
//   ?- my_flatten([a, [b, [c, d], e]], X).
//     X = [a, b, c, d, e]
//
//   Hint: Use the predefined predicates is_list/1 and append/3

export function flatten<T>(list: T[]): T[] {
  return list.reduce((acc: T[], element: T) => {
    if (element instanceof Array) {
      return acc.concat(flatten(element));
    }
    acc.push(element);
    return acc;
  }, []);
}
