import type { DayTime, Phase } from "../../store/expedition/expedition.types";
import forestTrailDay from "../../assets/images/expedition/forest-trail-day.png";
import forestCampfireDay from "../../assets/images/expedition/forest-campfire-day.png";
import forestTrailNight from "../../assets/images/expedition/forest-trail-night.png";
import forestCampfireNight from "../../assets/images/expedition/forest-campfire-night.png";

export const getBackgroundImage = (phase: Phase, dayTime: DayTime) => {
  const isCampfire = phase === "campfire" || phase === "finished";

  const backgrounds: Record<DayTime, { campfire: string; journey: string }> = {
    night: {
      journey: forestTrailNight,
      campfire: forestCampfireNight,
    },
    day: {
      journey: forestTrailDay,
      campfire: forestCampfireDay,
    },
  };

  return backgrounds[dayTime][isCampfire ? "campfire" : "journey"];
};
