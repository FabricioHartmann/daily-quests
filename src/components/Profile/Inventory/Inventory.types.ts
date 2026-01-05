import type { CatalogItem, InventoryItem, ItemRarity } from "../../../store/inventory/inventory.types";

export type InventoryItemProps = {
  item: InventoryItem;
};

export type InventoryPreviewItemProps = CatalogItem & {
  equipped: boolean;
  onToggleEquip: () => void
};

export const RARITY_ORDER: Record<ItemRarity, number> = {
  common: 0,
  rare: 1,
  epic: 2,
};

export const TYPE_ORDER: Record<InventoryItem["type"], number> = {
  weapon: 0,
  armor: 1,
  accessory: 2,
};