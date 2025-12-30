import forestTrailDay from '../assets/images/expedition/forest-trail-day.png'
import forestTrailNight from '../assets/images/expedition/forest-trail-night.png'
import forestCampfireDay from '../assets/images/expedition/forest-campfire-day.png'
import forestCampfireNight from '../assets/images/expedition/forest-campfire-night.png'
import riversideTrailDay from '../assets/images/expedition/riverside-trail-day.png'
import riversideTrailNight from '../assets/images/expedition/riverside-trail-night.png'
import riversideCampfireDay from '../assets/images/expedition/riverside-campfire-day.png'
import riversideCampfireNight from '../assets/images/expedition/riverside-campfire-night.png'
import mountainTrailDay from '../assets/images/expedition/mountain-day-trail.png'
import mountainTrailNight from '../assets/images/expedition/mountain-trail-night.png'
import mountainCampfireDay from '../assets/images/expedition/mountain-day-campfire.png'
import mountainCampfireNight from '../assets/images/expedition/mountain-night-campfire.png'
import expeditionIdle from '../assets/images/expedition/expedition-idle.png'


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
