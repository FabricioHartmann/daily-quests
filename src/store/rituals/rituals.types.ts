export type RitualId = "water_ritual" | "stretch_ritual" | "breath_ritual";

export type Ritual = {
  id: RitualId;
  name: string;
  icon: string;
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
