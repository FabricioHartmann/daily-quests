import { BACKGROUNDS, type Biome } from "../data/biomesCatalog";
import type { DayTime, Phase } from "../store/expedition/expedition.types";

const BIOMES: Biome[] = ["forest", "riverside", "mountain"];
type ImageSize = "full" | "small";

export const getRandomBiome = (): Biome => {
  const index = Math.floor(Math.random() * BIOMES.length);
  return BIOMES[index];
};

export const getBackgroundImage = (
  biome: Biome | null,
  phase: Phase,
  dayTime: DayTime,
  size: ImageSize = "full"
) => {
  const phaseKey =
    phase === "journey"
      ? "journey"
      : phase === "campfire" || phase === "finished"
      ? "campfire"
      : "idle";

  const biomeKey = biome ?? "forest";

  const image = BACKGROUNDS[biomeKey][phaseKey][dayTime];

  if (size === "small") {
    return image.replace(".webp", "-small.webp");
  }

  return image;
};
