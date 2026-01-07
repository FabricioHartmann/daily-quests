import type { RitualIconName } from "./ritualIconsMapper";

export type RitualId = "water_ritual" | "stretch_ritual" | "breath_ritual";

export type RitualProps = {
  ritual: Ritual;
};

export type Ritual = {
  id: RitualId;
  name: string;
  icon: RitualIconName;
  description: string;
  cooldownMinutes: number;
  xp: number;
  category: string;
};

export type RitualsState = {
  totalRitualsCompleted: number;
  rituals: Ritual[];
  updateRitual: (ritual: Ritual) => void;
};
