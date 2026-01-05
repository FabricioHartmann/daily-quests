import type { InventoryItem } from "../../../store/inventory/inventory.types";
import { RARITY_ORDER, TYPE_ORDER } from "./Inventory.types";

export function sortInventory(items: InventoryItem[]) {
  return [...items].sort((a, b) => {
    const typeDiff = TYPE_ORDER[a.type] - TYPE_ORDER[b.type];
    if (typeDiff !== 0) return typeDiff;

    return RARITY_ORDER[a.rarity] - RARITY_ORDER[b.rarity];
  });
}
