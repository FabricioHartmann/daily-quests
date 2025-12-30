import { BACKGROUNDS, type Biome } from "../data/biomesCatalog";
import type { DayTime, Phase } from "../store/expedition/expedition.types";

const BIOMES: Biome[] = ["forest", "riverside", "mountain"];

export const getRandomBiome = (): Biome => {
  const index = Math.floor(Math.random() * BIOMES.length);
  return BIOMES[index];
};

export const getBackgroundImage = (
  biome: Biome | null,
  phase: Phase,
  dayTime: DayTime
) => {
  const phaseKey =
    phase === "journey"
      ? "journey"
      : phase === "campfire" || phase === "finished"
      ? "campfire"
      : "idle";
  if (!biome) return BACKGROUNDS["forest"][phaseKey][dayTime];
  return BACKGROUNDS[biome][phaseKey][dayTime];
};
