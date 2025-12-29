import type { DayTime, Phase } from "../../store/expedition/expedition.types";
import forestTrailDay from "../../assets/images/expedition/forest-trail-day.png";
import forestCampfireDay from "../../assets/images/expedition/forest-campfire-day.png";
import forestTrailNight from "../../assets/images/expedition/forest-trail-night.png";
import forestCampfireNight from "../../assets/images/expedition/forest-campfire-night.png";

export const getBackgroundImage = (phase: Phase, dayTime: DayTime) => {
  if (dayTime === "night" && phase !== "campfire") return forestTrailNight;
  if (dayTime === "night" && phase === "campfire") return forestCampfireNight;
  if (dayTime === "day" && phase !== "campfire") return forestTrailDay;
  if (dayTime === "day" && phase === "campfire") return forestCampfireDay;
  return forestTrailDay;
};
