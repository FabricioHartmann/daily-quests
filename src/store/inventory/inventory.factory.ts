import { ITEMS_CATALOG } from "./itemsCatalog";
import type { InventoryItem, ItemId } from "./inventory.types";

export function buildInventoryItem(itemId: ItemId): InventoryItem {
  const catalog = ITEMS_CATALOG[itemId];

  return {
    itemId,
    name: catalog.name,
    icon: catalog.icon,
    description: catalog.description,
    type: catalog.type,
    effects: catalog.effects,
    rarity: catalog.rarity,
    equipped: false,
  };
}