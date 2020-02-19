// 1.09 (**) Pack consecutive duplicates of list elements into sublists.
//   If a list contains repeated elements they should be placed in separate sublists.
//
//   Example:
//   ?- pack([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
//     X = [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

export function pack<T>(list: T[]): [T[]] {
  return list.reduce(
    (acc: [T[]], element: T) => {
      const prevPack: T[] = <T[]>acc.pop();
      if (prevPack.length === 0 || prevPack[0] === element) {
        prevPack.push(element);
        acc.push(prevPack);
      } else {
        acc.push(prevPack, [element]);
      }
      return acc;
    },
    [[]]
  );
}
