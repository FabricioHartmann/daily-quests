import { GiPotionBall, GiStrong, GiAura } from "react-icons/gi";

export const RITUAL_ICONS = {
  GiPotionBall,
  GiStrong,
  GiAura,
} as const;

export type RitualIconName = keyof typeof RITUAL_ICONS;
