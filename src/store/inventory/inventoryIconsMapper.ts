import {
  GiBroadsword,
  GiCrocSword,
  GiTwoHandedSword,
  GiRelicBlade,
  GiRuneSword,
  GiNinjaArmor,
  GiChestArmor,
  GiHeartArmor,
  GiCapeArmor,
  GiLeatherArmor,
  GiShoulderArmor,
  GiRing,
  GiPoncho,
  GiSteampunkGoggles,
  GiOldLantern,
} from "react-icons/gi";

export const ITEM_ICONS = {
  //swords
  GiBroadsword,
  GiCrocSword,
  GiTwoHandedSword,
  GiRelicBlade,
  GiRuneSword,
  //armors
  GiNinjaArmor,
  GiChestArmor,
  GiHeartArmor,
  GiCapeArmor,
  GiLeatherArmor,
  GiShoulderArmor,
  // accessories
  GiRing,
  GiPoncho,
  GiSteampunkGoggles,
  GiOldLantern,
} as const;

export type ItemIconName = keyof typeof ITEM_ICONS;
