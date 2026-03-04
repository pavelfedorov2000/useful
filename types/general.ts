export type TNullable<T> = T | null;
export type TMaybe<T> = T | null | undefined;

export type TKeysByNumberValues<T> = Exclude<
  {
    [K in keyof T]: NonNullable<T[K]> extends number ? K : never;
  }[keyof T],
  undefined
>;