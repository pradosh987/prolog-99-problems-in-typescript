// 1.12 (**) Decode a run-length encoded list.
//   Given a run-length code list generated as specified in problem 1.11. Construct its uncompressed version.

export function decode<T>(list: (T | (number | T)[])[]): T[] {
  return list.reduce((acc: T[], element) => {
    if (element instanceof Array) {
      for (let i = 0; i < <number>element[0]; i++) {
        acc.push(<T>element[1]);
      }
    } else acc.push(<T>element);
    return acc;
  }, []);
}
