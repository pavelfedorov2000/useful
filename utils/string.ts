import { TNullable } from "../types";

export const getIsStringsIntersected = (str: string, search: string) => {
  if (!search) return false;

  return str.toLowerCase().includes(search.toLowerCase());
};

export const compareStringsByLowerCase = (a?: string, b?: string): boolean => {
  if (!a || !b) return false;

  return a.toLowerCase() === b.toLowerCase();
};

export const truncateWithSymbol = (
  str: string,
  visibleLettersCount: number = 3,
  symbol: string = '*'
): string => {
  if (str.length <= visibleLettersCount) return str;

  return str.substring(0, visibleLettersCount) + symbol.repeat(str.length - visibleLettersCount);
};
//console.log(truncateWithSymbol("hello world", 3));       // "hel********"
//console.log(truncateWithSymbol("short", 10));             // "short"
//console.log(truncateWithSymbol("a", 5));                  // "a"
//console.log(truncateWithSymbol("hello", 2, '#'));         // "he###"

export function capitalize(str: string): string {
  return str.trim() ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';
}
//console.log(capitalize("hello")); // "Hello"
//console.log(capitalize("hElLo")); // "Hello"
//console.log(capitalize("  hello  ")); // "Hello"
//console.log(capitalize("")); // ""
//console.log(capitalize("   ")); // ""

export function getSubstring(string: TNullable<string>, regexp: RegExp): TNullable<string> {
  if (!string) return null;

  const match = string.match(regexp);

  return match && match[1] ? match[1] : null;
}
//getSubstring("hello world", /hello (\w+)/); // "world"
//getSubstring("no match here", /hello (\w+)/); // null
//getSubstring(null, /hello (\w+)/); // null
//getSubstring("", /hello (\w+)/); // null

export function removeTrailingSlash(str: string): string {
  if (!str) return str;
  return str.replace(/\/$/, '');
}
//console.log(removeTrailingSlash("path/to/directory/")); // "path/to/directory"
//console.log(removeTrailingSlash("path/to/directory"));  // "path/to/directory"
//console.log(removeTrailingSlash("/"));                  // ""
//console.log(removeTrailingSlash(""));                   // ""
//console.log(removeTrailingSlash(null));                 // null