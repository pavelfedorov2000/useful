export const BUTTON_IDS = {} as const;

const BUTTON_TYPES = {
  Outlined: 'outlined',
  Reset: 'reset',
  Link: 'link',
} as const;

const BUTTTON_VARIANTS = {
  Menu: 'menu',
  SeeAll: 'see-all',
  Icon: 'icon',
  Underlined: 'underlined',
};

const BUTTTON_COLORS = {
  Primary: 'primary',
  Secondary: 'secondary',
};

const BUTTON_SIZES = {
  XExtraSmall: 'xxs',
  ExtraSmall: 'xs',
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  ExtraLarge: 'xl',
  XExtraLarge: 'xxl',
  XXExtraLarge: 'xxxl',
} as const;

const BUTTON_EFFECTS = {
  Loading: 'loading',
} as const;

export const BUTTON_MODS = {
  ...BUTTON_TYPES,
  ...BUTTTON_VARIANTS,
  ...BUTTTON_COLORS,
  ...BUTTON_SIZES,
  ...BUTTON_EFFECTS,
} as const;
