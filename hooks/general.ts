import { useCallback, useState, useMemo } from 'react';
import { DEVICE_TYPES, MOBILE_DEVICES } from '../constants';
import { isIOS } from '../utils';

export const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const setIsTrue = useCallback(() => setState(true), []);
  const setIsFalse = useCallback(() => setState(false), []);
  const toggleState = useCallback(() => setState((prev) => !prev), []);

  return [state, { setIsTrue, setIsFalse, toggleState, setState }] as const;
};

export function usePagination<T>(list: T[] | undefined, itemsPerPage: number) {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const safeList = useMemo(() => (Array.isArray(list) ? list : []), [list]);

  const visibleItems = useMemo(() => safeList.slice(0, visibleCount), [safeList, visibleCount]);

  const isAllLoaded = useMemo(() => visibleCount >= safeList.length, [visibleCount, safeList]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev < safeList.length ? prev + itemsPerPage : prev);
  }, [itemsPerPage, safeList.length]);

  return { visibleItems, isAllLoaded, handleLoadMore };
}

export function useGetDeviceType() {
  const { isMobile } = useIsBreakpoint();

  if (!isMobile) {
    return DEVICE_TYPES.desktop;
  }

  if (isIOS()) {
    return MOBILE_DEVICES.ios;
  }

  return MOBILE_DEVICES.android;
}