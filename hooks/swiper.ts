import { useCallback, useState, useRef } from 'react';
import { SwiperClass, SwiperProps } from 'swiper/react';
import { useBooleanState } from './general';

type TSwiperPropsCustom =  {
  isEnd: boolean;
  isLocked: boolean;
};

type TSwiperProps = SwiperProps & TSwiperPropsCustom;

export const useSwiper = () => {
  const [isLastSlide, { setState: setIsLastSlide }] = useBooleanState();
  const [isLockScroll, { setState: setIsLockScroll }] = useBooleanState();

  const handleSwiperChange = useCallback(
    (swiper: TSwiperProps) => {
      setIsLastSlide(swiper?.isEnd);
    },
    [setIsLastSlide],
  );

  const handleSwiperResize = useCallback(
    (swiper: TSwiperProps) => {
      setIsLockScroll(swiper?.isLocked);
      handleSwiperChange(swiper);
    },
    [handleSwiperChange],
  );

  const handleInitSwiper = useCallback(
    (swiper: TSwiperProps) => {
      handleSwiperChange(swiper);
      handleSwiperResize(swiper);
    },
    [handleSwiperChange, handleSwiperResize],
  );

  return [{
    isLastSlide,
    isLockScroll,
  },
  {
    handleSwiperChange,
    handleSwiperResize,
    handleInitSwiper,
  }];
};

const getIsSliderModule = <T>(module: boolean | T | undefined): module is T =>
  typeof module !== 'boolean' && module !== undefined;

export const useSliderControls = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  // Attaches controls refs in case slider was remounted
  const handleBeforeInit = useCallback((swiper: SwiperClass) => {
    if (getIsSliderModule(swiper.params.navigation)) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    }

    if (getIsSliderModule(swiper.params.pagination)) {
      swiper.params.pagination.el = paginationRef.current;
    }
  }, []);

  return {
    navigationPrevRef,
    navigationNextRef,
    paginationRef,
    handleBeforeInit,
  } as const;
};
