import type { ITEM_ICONS, ItemIconName } from "./inventoryIconsMapper";

export type ItemId =
  | "initial-light-armor"
  | "initial-iron-sword"
  | "initial-ring";
export type IconId = keyof typeof ITEM_ICONS;

export type ItemRarity = "common" | "rare" | "epic";


export type InventoryItem = {
  itemId: ItemId;
  name: string;
  icon: ItemIconName;
  description: string;
  type: "weapon" | "armor" | "accessory";
  effects: string[];
  rarity: ItemRarity;
  equipped: boolean;
};

export type InventoryState = {
  items: InventoryItem[];
  itemsLimit: number;
  selectedItemId?: ItemId;
  addItem: (item: ItemId) => void;
  removeItem: (itemId: ItemId) => void;
  selectItem: (itemId: ItemId) => void;
  equipItem: (itemId: ItemId) => void;
  unequipByType: (itemType: InventoryItem["type"]) => void;
};

export type CatalogItem = {
  itemId: ItemId;
  name: string;
  icon: IconId;
  description: string;
  type: "weapon" | "armor" | "accessory";
  effects: string[];
  rarity: ItemRarity;
};
