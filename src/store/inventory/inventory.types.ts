import type { QuestType } from "../quests/quests.types";
import type { ITEM_ICONS, ItemIconName } from "./inventoryIconsMapper";

export type ItemId =
  // swords
  | "iron-sword"
  | "croc-sword"
  | "two-handed-sword"
  | "relic-blade"
  | "runed-blade"
  | "broken-sword"
  | "dagger"
  | "double-swords"
  | "bow"
  | "staff"
  // armors
  | "initial-light-armor"
  | "heart-armor"
  | "shoulder-armor"
  | "chest-armor"
  | "leather-armor"
  | "cape-armor"
  | "robe"
  //accessories
  | "initial-ring"
  | "necklace"
  | "antique-poncho"
  | "lantern"
  | "bracers"
  | "power-ring"
  | "fishing-rod"
  | "quiver"
  | "primitive-necklace";

export type IconId = keyof typeof ITEM_ICONS;
export type ItemRarity = "common" | "rare" | "epic";

export type XpMultiplierEffect = {
  kind: "xp_multiplier";
  multiplier: number;
  appliesTo: QuestType;
  active: boolean;
  description: string;
};

export type XpBonusEffect = {
  kind: "xp_bonus";
  amount: number;
  appliesTo: QuestType;
  active: boolean;
  description: string;
};

export type ItemEffect = XpBonusEffect | XpMultiplierEffect;

export type InventoryItem = {
  itemId: ItemId;
  name: string;
  icon: ItemIconName;
  description: string;
  type: "weapon" | "armor" | "accessory";
  effects: ItemEffect[];
  rarity: ItemRarity;
  equipped: boolean;
};

export type InventoryState = {
  items: InventoryItem[];
  itemsLimit: number;
  selectedItemId?: ItemId;
  addItem: (item: ItemId) => void;
  removeItem: (itemId: ItemId) => void;
  selectItem: (itemId: ItemId | undefined) => void;
  equipItem: (itemId: ItemId) => void;
  unequipByType: (itemType: InventoryItem["type"]) => void;
};

export type CatalogItem = {
  itemId: ItemId;
  name: string;
  icon: IconId;
  description: string;
  type: "weapon" | "armor" | "accessory";
  effects: ItemEffect[];
  rarity: ItemRarity;
};
