const SLIDE_ANIMATION_VARIANTS = {
  fromBottom: 'slide-from-bottom',
  fromBottomWithRotate: 'slide-from-bottom-with-rotate',
  fromTopLeft: 'slide-from-top-left',
  fromLeft: 'slide-from-left',
  fromTopRight: 'slide-from-top-right',
  fromRight: 'slide-from-right',
};

const FADE_ANIMATION_VARIANTS = {
  in: 'fade-in',
};

const TICKER_ANIMATION_VARIANTS = {
  verticalLeft: 'vertical-left-ticker',
  verticalRight: 'vertical-right-ticker',
  verticalLeftReversed: 'vertical-left-ticker-reversed',
};

export const ANIMATION_VARIANTS = {
  slide: { ...SLIDE_ANIMATION_VARIANTS },
  fade: { ...FADE_ANIMATION_VARIANTS },
  ticker: { ...TICKER_ANIMATION_VARIANTS },
};

export const LOADING_ANIMATION_DURATION = 1500;
