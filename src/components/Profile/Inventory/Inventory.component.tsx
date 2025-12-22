import { useState } from "react";
import { Button, Text } from "../../Generic";
import { useInventoryStore } from "../../../store/inventory/inventory.store";
import { InventoryItem } from "./InventoryItem/InventoryItem.component";
import { InventoryPreviewItem } from "./InventoryPreviewItem/InventoryPreviewItem.component";
import type { ItemId } from "../../../store/inventory/inventory.types";
import { InventoryPreviewEmptyState } from "./InventoryPreviewEmptyState/InventoryEmptyState.component";
import { ITEMS_CATALOG } from "../../../store/inventory/itemsCatalog";
import "./Inventory.styles.css";

export function Inventory() {
  const { items, itemsLimit } = useInventoryStore();
  const [selectedItemId, setSelectedItemId] = useState<ItemId>();
  const selectedItem = selectedItemId ? ITEMS_CATALOG[selectedItemId] : null;

  const handleSelectItem = (id: ItemId) => {
    setSelectedItemId(id);
  };

  return (
    <div className="inventory-card">
      <div className="inventory-header">
        <Text size="lg" color="var(--white)">
          Inventário
        </Text>
      </div>
      <div className="inventory-container">
        <div className="inventory-content">
          <div className="inventory-grid">
            {items.map((item) => (
              <div
                onClick={() => handleSelectItem(item.itemId)}
                key={item.itemId}
              >
                <InventoryItem item={item} />
              </div>
            ))}
          </div>
          <div>
            <Text italic>
              capacidade: {items?.length}/{itemsLimit} itens
            </Text>
          </div>
        </div>
        {selectedItem?.itemId ? (
          <InventoryPreviewItem
            key={selectedItem?.itemId}
            item={selectedItem}
          />
        ) : (
          <InventoryPreviewEmptyState />
        )}
      </div>
    </div>
  );
}
