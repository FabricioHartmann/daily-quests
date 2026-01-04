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
} as const;

export type ItemIconName = keyof typeof ITEM_ICONS;
