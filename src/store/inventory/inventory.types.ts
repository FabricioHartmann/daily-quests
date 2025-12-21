
import { GiNinjaArmor, GiBroadsword, GiRing } from "react-icons/gi";

export const ITEM_ICONS = {
  GiNinjaArmor,
  GiBroadsword,
  GiRing,
} as const;

export type ItemId = "initial-light-armor" | "initial-iron-sword" | "initial-ring";
export type IconId = keyof typeof ITEM_ICONS;

export type InventoryItemInstance = {
  itemId: ItemId;
  equipped?: boolean;
};

export type InventoryState = {
  items: InventoryItemInstance[];
  selectedItemId?: ItemId;
  itemsLimit: number;
  addItem: (itemId: ItemId) => void;
  removeItem: (itemId: ItemId) => void;
  selectItem: (itemId: ItemId) => void;
  equipItem: (itemId: ItemId) => void;
  unequipItem: (itemId: ItemId) => void;
};

export type CatalogItem = {
  itemId: ItemId;
  name: string;
  icon: IconId;
  description: string;
  type: "weapon" | "armor" | "accessory";
  effects: string[];
  rarity: "common" | "rare" | "epic";
};
