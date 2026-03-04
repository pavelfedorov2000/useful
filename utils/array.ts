export const repeatArray = <T = unknown>(array: T[], n: number): T[] => [].concat(...Array(n).fill(array));

export const checkIsArray = (array: unknown): array is unknown[] => Array.isArray(array);
//console.log(checkIsArray([1, 2, 3])); // true

export const hasIntersection = <T>(array1: T[], array2: T[]): boolean => {
  if (!array1.length || !array2.length) return false;

  const set = new Set(array2);
  return array1.some((item) => set.has(item));
};
//console.log(hasIntersection([1, 2], [2, 3])); // true

// By default this function searches element in array by id (key - optional)
export const findDataByKey = <T extends { id: PropertyKey }, K extends keyof T = 'id'>({
  array,
  key,
  value,
}: {
  array: T[];
  key?: K;
  value: T[K];
}): T | undefined => array.find((item) => item[key ?? 'id'] === value);
//findDataByKey({ array: freespins, value: groupKey }); // key: id
//findDataByKey({ array: freespins, key: 'group_key', value: groupKey });

export const sliceArray = <T>(arr: T[] = [], limit: number = 2): T[] => arr.slice(0, limit);
//console.log(sliceArray([1, 2, 3, 4], 2)); // [1, 2]
//console.log(sliceArray([10, 20, 30], 5)); // [10, 20, 30]
//console.log(sliceArray([], 3)); // []