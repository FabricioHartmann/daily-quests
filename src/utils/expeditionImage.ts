import { BACKGROUNDS, type Biome, type ImageKey } from "../data/biomesCatalog";
import type { DayTime, Phase } from "../store/expedition/expedition.types";

const BIOMES: Biome[] = ["forest", "riverside", "mountain"];

export const getRandomBiome = (): Biome => {
  const index = Math.floor(Math.random() * BIOMES.length);
  return BIOMES[index];
};

export const getBackgroundImage = (
  biome: Biome | null,
  phase: Phase,
  dayTime: DayTime,
  size: "default" | "small" = "default"
) => {
  const phaseKey: "journey" | "campfire" | "idle" =
    phase === "journey"
      ? "journey"
      : phase === "campfire" || phase === "finished"
      ? "campfire"
      : "idle";

  const biomeKey: Biome = biome ?? "forest";

  const sizeKey: ImageKey =
    size === "small" ? `${dayTime}Small` as ImageKey : dayTime;

  return BACKGROUNDS[biomeKey][phaseKey][sizeKey];
};
