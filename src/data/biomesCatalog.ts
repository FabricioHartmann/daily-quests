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

import forestTrailDaySmall from '../assets/images/expedition/forest-trail-day-small.webp'
import forestTrailNightSmall from '../assets/images/expedition/forest-trail-night-small.webp'
import forestCampfireDaySmall from '../assets/images/expedition/forest-campfire-day-small.webp'
import forestCampfireNightSmall from '../assets/images/expedition/forest-campfire-night-small.webp'
import riversideTrailDaySmall from '../assets/images/expedition/riverside-trail-day-small.webp'
import riversideTrailNightSmall from '../assets/images/expedition/riverside-trail-night-small.webp'
import riversideCampfireDaySmall from '../assets/images/expedition/riverside-campfire-day-small.webp'
import riversideCampfireNightSmall from '../assets/images/expedition/riverside-campfire-night-small.webp'
import mountainTrailDaySmall from '../assets/images/expedition/mountain-day-trail-small.webp'
import mountainTrailNightSmall from '../assets/images/expedition/mountain-trail-night-small.webp'
import mountainCampfireDaySmall from '../assets/images/expedition/mountain-day-campfire-small.webp'
import mountainCampfireNightSmall from '../assets/images/expedition/mountain-night-campfire-small.webp'
import expeditionIdleSmall from '../assets/images/expedition/expedition-idle-small.webp'

export type Biome = "forest" | "riverside" | "mountain";
export type ImageKey = "day" | "night" | "daySmall" | "nightSmall";
type BackgroundPhase = Record<ImageKey, string>;

type BackgroundBiome = {
  journey: BackgroundPhase;
  campfire: BackgroundPhase;
  idle: BackgroundPhase;
};

export const BACKGROUNDS: Record<Biome, BackgroundBiome> = {
  forest: {
    journey: {
      day: forestTrailDay,
      night: forestTrailNight,
      daySmall: forestTrailDaySmall,
      nightSmall: forestTrailNightSmall,
    },
    campfire: {
      day: forestCampfireDay,
      night: forestCampfireNight,
      daySmall: forestCampfireDaySmall,
      nightSmall: forestCampfireNightSmall,
    },
    idle: {
      day: expeditionIdle,
      night: expeditionIdle,
      daySmall: expeditionIdleSmall,
      nightSmall: expeditionIdleSmall,
    },
  },

  riverside: {
    journey: {
      day: riversideTrailDay,
      night: riversideTrailNight,
      daySmall: riversideTrailDaySmall,
      nightSmall: riversideTrailNightSmall,
    },
    campfire: {
      day: riversideCampfireDay,
      night: riversideCampfireNight,
      daySmall: riversideCampfireDaySmall,
      nightSmall: riversideCampfireNightSmall,
    },
    idle: {
      day: expeditionIdle,
      night: expeditionIdle,
      daySmall: expeditionIdleSmall,
      nightSmall: expeditionIdleSmall,
    },
  },

  mountain: {
    journey: {
      day: mountainTrailDay,
      night: mountainTrailNight,
      daySmall: mountainTrailDaySmall,
      nightSmall: mountainTrailNightSmall,
    },
    campfire: {
      day: mountainCampfireDay,
      night: mountainCampfireNight,
      daySmall: mountainCampfireDaySmall,
      nightSmall: mountainCampfireNightSmall,
    },
    idle: {
      day: expeditionIdle,
      night: expeditionIdle,
      daySmall: expeditionIdleSmall,
      nightSmall: expeditionIdleSmall,
    },
  },
} as const;