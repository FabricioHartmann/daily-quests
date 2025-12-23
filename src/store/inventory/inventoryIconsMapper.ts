import { GiNinjaArmor, GiBroadsword, GiRing } from "react-icons/gi";

export const ITEM_ICONS = {
  GiNinjaArmor,
  GiBroadsword,
  GiRing,
} as const;

export type ItemIconName = keyof typeof ITEM_ICONS;