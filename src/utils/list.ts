export function head<T>(list: T[]): T {
  if (!(list instanceof Array)) {
    throw new Error("supplied list is not an array");
  }
  return list[0];
}

export function tail<T>(list: T[]): T[] {
  return list instanceof Array ? list.slice(1) : [];
}
