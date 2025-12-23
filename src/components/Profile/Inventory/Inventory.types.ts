import type { CatalogItem, InventoryItem } from "../../../store/inventory/inventory.types";

export type InventoryItemProps = {
  item: InventoryItem;
};

export type InventoryPreviewItemProps = CatalogItem & {
  equipped: boolean;
  onToggleEquip: () => void
};