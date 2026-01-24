import { RenderIf, Text } from "../../GenericComponents";
import { useInventoryStore } from "../../../store/inventory/inventory.store";
import { InventoryItem } from "./InventoryItem/InventoryItem.component";
import { InventoryPreviewItem } from "./InventoryPreviewItem/InventoryPreviewItem.component";
import { type InventoryItem as InventoryItemType } from "../../../store/inventory/inventory.types";
import { InventoryPreviewEmptyState } from "./InventoryPreviewEmptyState/InventoryEmptyState.component";
import "./Inventory.styles.css";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { MobileItemPreview } from "../../Modal/variants/MobileItemPreviewModal";
import { useModalStore } from "../../../store/modal/modal.store";
import { useEffect, useMemo } from "react";
import type { InventoryPreviewItemProps } from "./Inventory.types";
import { ITEMS_CATALOG } from "../../../data/itemsCatalog";
import { playItemEquipSound } from "../../../utils/soundPlayer";
import { sortInventory } from "./inventory.helper";

export function Inventory() {
  const isMobile = useIsMobile(576);
  const { openModal } = useModalStore();
  const { items, selectedItemId, equipItem, unequipByType, selectItem } =
    useInventoryStore();

  const sortedItems = useMemo(() => {
    return sortInventory(items);
  }, [items]);

  const selectedItem = useMemo(() => {
    if (!selectedItemId) return null;

    const catalogItem = ITEMS_CATALOG[selectedItemId];
    const inventoryItem = items.find((i) => i.itemId === selectedItemId);

    if (!catalogItem) return null;

    return {
      ...catalogItem,
      equipped: inventoryItem?.equipped ?? false,
    };
  }, [selectedItemId, items]);

  const handleToggleEquip = () => {
    if (!selectedItem) return;
    playItemEquipSound();
    if (selectedItem.equipped) unequipByType(selectedItem.type);
    else equipItem(selectedItem.itemId);
  };

  const previewItem = useMemo(() => {
    if (!selectedItem) return null;

    return {
      ...selectedItem,
      onToggleEquip: handleToggleEquip,
    };
  }, [selectedItem, handleToggleEquip]);

  const handleSelectItem = (inventoryItem: InventoryItemType) => {
    selectItem(inventoryItem.itemId);
    if (!isMobile) return;

    const catalogItem = ITEMS_CATALOG[inventoryItem.itemId];

    const previewItem: InventoryPreviewItemProps = {
      ...catalogItem,
      equipped: inventoryItem.equipped,
      onToggleEquip: () => {
        if (inventoryItem.equipped) {
          unequipByType(catalogItem.type);
        } else {
          equipItem(inventoryItem.itemId);
        }
      },
    };

    openModal(<MobileItemPreview itemId={previewItem.itemId} />);
  };

  useEffect(() => {
    return () => {
      selectItem(undefined);
    };
  }, []);

  return (
    <div className="inventory">
      <div className="inventory-header">
        <Text color="var(--white)">
          Inventário
        </Text>
      </div>
      <div className="inventory-container">
        <div className="inventory-content">
          <div className="inventory-grid">
            {sortedItems.map((item) => (
              <div onClick={() => handleSelectItem(item)} key={item.itemId}>
                <InventoryItem item={item} />
              </div>
            ))}
          </div>
        </div>
        <RenderIf condition={!isMobile}>
          {previewItem ? (
            <InventoryPreviewItem
              item={previewItem}
              onToggleEquip={handleToggleEquip}
            />
          ) : (
            <InventoryPreviewEmptyState />
          )}
        </RenderIf>
      </div>
    </div>
  );
}
