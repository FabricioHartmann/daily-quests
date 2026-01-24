import forestTrailDay from '../assets/images/expedition/forest-trail-day.webp'
import forestTrailNight from '../assets/images/expedition/forest-trail-night.webp'
import forestCampfireDay from '../assets/images/expedition/forest-campfire-day.webp'
import forestCampfireNight from '../assets/images/expedition/forest-campfire-night.webp'
import riversideTrailDay from '../assets/images/expedition/riverside-trail-day.webp'
import riversideTrailNight from '../assets/images/expedition/riverside-trail-night.webp'
import riversideCampfireDay from '../assets/images/expedition/riverside-campfire-day.webp'
import riversideCampfireNight from '../assets/images/expedition/riverside-campfire-night.webp'
import mountainTrailDay from '../assets/images/expedition/mountain-day-trail.webp'
import mountainTrailNight from '../assets/images/expedition/mountain-trail-night.webp'
import mountainCampfireDay from '../assets/images/expedition/mountain-day-campfire.webp'
import mountainCampfireNight from '../assets/images/expedition/mountain-night-campfire.webp'
import expeditionIdle from '../assets/images/expedition/expedition-idle.webp'

export type Biome = "forest" | "riverside" | "mountain";

export const BACKGROUNDS = {
  forest: {
    journey: {
      day: forestTrailDay,
      night: forestTrailNight,
    },
    campfire: {
      day: forestCampfireDay,
      night: forestCampfireNight,
    },
    idle: {
      day: expeditionIdle,
      night: expeditionIdle,
    },
  },

  riverside: {
    journey: {
      day: riversideTrailDay,
      night: riversideTrailNight,
    },
    campfire: {
      day: riversideCampfireDay,
      night: riversideCampfireNight,
    },
    idle: {
      day: expeditionIdle,
      night: expeditionIdle,
    },
  },

  mountain: {
    journey: {
      day: mountainTrailDay,
      night: mountainTrailNight,
    },
    campfire: {
      day: mountainCampfireDay,
      night: mountainCampfireNight,
    },
    idle: {
      day: expeditionIdle,
      night: expeditionIdle,
    },
  },
} as const;
