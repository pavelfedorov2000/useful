/** DATA SOURCE: CONFIG */
export const BREAKPOINTS = {
  xxs: 460,
  xs: 576,
  sm: 768,
  md: 960,
  lg: 1248,
  xl: 1632,
  xxl: 1920,
} as const;

export const BREAKPOINT_KEYS_BY_NAME = {
  'screen-xxs': 'xxs',
  'screen-xs': 'xs',
  'screen-sm': 'sm',
  'screen-md': 'md',
  'screen-lg': 'lg',
  'screen-xl': 'xl',
  'screen-xxl': 'xxl',
} as const;

export const BREAKPOINT_KEYS = Object.keys(BREAKPOINTS) as Array<keyof typeof BREAKPOINTS>;
