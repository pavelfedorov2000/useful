import { useCallback, useRef } from 'react';

export const useThrottle = <CbArgs extends unknown[]>(callback: (...params: CbArgs) => void, limit: number = 300) => {
  const lastCallRef = useRef(0);

  return useCallback(
    (...args: CbArgs) => {
      const now = Date.now();
      if (now - lastCallRef.current >= limit) {
        lastCallRef.current = now;
        callback(...args);
      }
    },
    [callback, limit],
  );
};
