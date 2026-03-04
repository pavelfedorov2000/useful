import { useRef, useCallback } from 'react';
import { TNullable } from '../types';

export const useDebounce = <CbArgs extends unknown[]>(callback: (...params: CbArgs) => void, delay: number = 300) => {
  const timeoutRef = useRef<TNullable<NodeJS.Timeout>>(null);

  return useCallback(
    (...args: CbArgs) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
