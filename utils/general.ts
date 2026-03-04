import { TNullable } from "../types";

export const omitUndefined = <T extends Record<string, unknown>>(obj: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  ) as Partial<T>;
};

// Example
const data = {
  name: 'John',
  age: undefined,
  country: 'USA',
};
//console.log(omitUndefined(data)); // { name: 'John', country: 'USA' }

export const isDefined = (...values: unknown[]): boolean =>
  values.every((value) => value !== undefined && value !== null);
// Examples:
//const result1 = isDefined(1, 'Hello', true);   // true
//const result2 = isDefined(1, null, 'Hello');   // false
//const result3 = isDefined(undefined, 'World'); // false

export function isObj(value: unknown): value is Record<string, unknown> {
  // 1) type of null = object
  // 2) arrays also objects
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

// Examples:
//console.log(isObj({ key: 'value' })); // true
//console.log(isObj([1, 2, 3])); // false
//console.log(isObj(42)); // false
//console.log(isObj(null)); // false

export const scrollIntoViewWithOffset = (selector: TNullable<HTMLElement>, offset: number = 0): void => {
  if (!selector) return;

  const rect = selector.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();

  window.scrollTo({
    behavior: 'smooth',
    top: rect.top - bodyRect.top - offset,
  });
};
//scrollIntoViewWithOffset(myElement, 50);