import type { RitualIconName } from "./ritualIconsMapper";

export type RitualId = "water_ritual" | "stretch_ritual" | "breath_ritual";

export type RitualProps = {
  ritual: Ritual;
};

export type RitualPhase = "idle" | "started" | "finished";

export type Ritual = {
  id: RitualId;
  name: string;
  icon: RitualIconName;
  description: string;
  category: string;
  isActive: boolean;
};

export type RitualsState = {
  rituals: Ritual[];
  totalRitualsCompleted: number;
  phase: RitualPhase;
  endsAt: number | null;
  cooldownInMinutes: number
  xpPerHour: number
  toggleRitualActive: (id: RitualId) => void;
  startRitual: () => void;
  cancelRitual: () => void;
  finishRitual: () => void;
  setCooldownInMinutes: (minutes: number) => void;
  checkRitualTransitions: () => void;
};
