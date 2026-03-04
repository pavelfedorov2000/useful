import { TPropsMods } from "../types";

export const getClassNameByMods = (className: string, mods: TPropsMods = []) =>
  mods.filter(Boolean).map((mod) => `${className}--${mod}`);