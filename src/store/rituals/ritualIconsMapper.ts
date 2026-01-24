import { GiPotionBall, GiStrong } from "react-icons/gi";

export const RITUAL_ICONS = {
  GiPotionBall,
  GiStrong,
} as const;

export type RitualIconName = keyof typeof RITUAL_ICONS;
