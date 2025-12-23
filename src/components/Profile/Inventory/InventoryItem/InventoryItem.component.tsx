import { useInventoryStore } from "../../../../store/inventory/inventory.store";
import { ITEM_ICONS } from "../../../../store/inventory/inventoryIconsMapper";
import { ITEMS_CATALOG } from "../../../../store/inventory/itemsCatalog";
import type { InventoryItemProps } from "../Inventory.types";
import "./InventoryItem.styles.css";

export function InventoryItem({ item }: InventoryItemProps) {
  const selectItem = useInventoryStore((s) => s.selectItem);
  const selectedItemId = useInventoryStore((s) => s.selectedItemId);
  const data = ITEMS_CATALOG[item.itemId];
  
  if (!data) {
    return null;
  }

  const Icon = ITEM_ICONS[data.icon];
  const isSelected = selectedItemId === item.itemId;

  return (
    <div
      className={`inventory-item
        ${isSelected ? "is-selected" : ""}
        ${item.equipped ? "is-equipped" : ""}
      `}
      onClick={() => selectItem(item.itemId)}
    >
      <Icon color="var(--white)" size={28} />
    </div>
  );
}
