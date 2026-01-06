import { GiPotionBall, GiStrong, GiRearAura } from "react-icons/gi";

export const RITUAL_ICONS = {
  GiPotionBall,
  GiStrong,
  GiRearAura,
} as const;

export type RitualIconName = keyof typeof RITUAL_ICONS;
