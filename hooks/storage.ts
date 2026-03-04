import { useState, useCallback } from 'react';
import { CustomLocalStorage } from '../utils';

export function useLocalStorageState<T>(key: string, defaultValue?: T) {
  const [value, setValue] = useState(() => (CustomLocalStorage.getItem(key)) ?? defaultValue);

  const handleValueChange = useCallback(
    (value: T) => {
      setValue(value);
      CustomLocalStorage.setItem(key, value);
    },
    [key],
  );

  return [value, handleValueChange] as const;
}
