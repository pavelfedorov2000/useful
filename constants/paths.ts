export const PATH_NAMES = {
  home: '',
} as const;

type TAppPathKey = keyof typeof PATH_NAMES;
type TAppPathName = (typeof PATH_NAMES)[TAppPathKey];

export const PATHS = Object.entries(PATH_NAMES).reduce((paths, [pathNameKey, pathName]) => {
  paths[pathNameKey as TAppPathKey] = `/${pathName}`;

  return paths;
}, {} as Record<TAppPathKey, `/${TAppPathName}`>);
