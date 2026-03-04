import { useEffect, useState, useRef, useCallback } from 'react';
import { TNullable } from '../types';
import { increment } from '../utils';

export const useInfiniteScroll = <T, ObserverRefType extends Element = HTMLDivElement>(
  items: T[] = [],
  itemsPerPage: number = 10,
) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const loadMoreTriggerRef = useRef<TNullable<ObserverRefType>>(null);

  const loadMore = useCallback(() => {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    // Прекращаем загрузку, если нет новых элементов
    if (start >= items.length) return;

    setVisibleItems((prev) => [...prev, ...items.slice(start, end)]);
    increment(setPage);
  }, [items, page, itemsPerPage]);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (loadMoreTriggerRef.current) {
      observer.observe(loadMoreTriggerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [page, loadMore, items]);

  return [visibleItems, { loadMoreTriggerRef }] as const;
};