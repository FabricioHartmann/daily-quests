import type { Biome } from "../../../data/biomesCatalog";
import type { DayTime, Phase } from "../../../store/expedition/expedition.types";

export type ExpeditionResumeImageProps = {
  biome: Biome | null;
  phase: Phase;
  dayTime: DayTime;
};
