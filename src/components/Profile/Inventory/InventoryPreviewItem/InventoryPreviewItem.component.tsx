import { Button, Text } from "../../../Generic";
import type { InventoryPreviewItemProps } from "../Inventory.types";
import { ITEM_ICONS } from "../../../../store/inventory/inventoryIconsMapper";
import "./InventoryPreviewItem.styles.css";
import { useInventoryStore } from "../../../../store/inventory/inventory.store";

export function InventoryPreviewItem({ item }: InventoryPreviewItemProps) {
  const { equipItem, unequipItem, items } = useInventoryStore();
  const Icon = ITEM_ICONS[item.icon];

  const handleEquipItem = () => {
    equipItem(item.itemId);
  };
  const handleUnequipItem = () => {
    unequipItem(item.itemId);
  };

  const selectedItem = items?.find((item) => item.itemId);

  return (
    <div className="inventory-preview">
      <div className="inventory-preview-item">
        <div className="preview-item-wrapper">
          <Icon color="white" size={56} />
        </div>
        <Text size="lg">{item.name}</Text>
      </div>
      <div className="inventory-preview-description">
        <div>
          <Text italic>Efeitos:</Text>
          <div>
            {item.effects.map((effect) => (
              <Text italic>• {effect}</Text>
            ))}
          </div>
        </div>
        <Text italic>{item.description}</Text>
      </div>
      <div className="inventory-preview-footer">
        {selectedItem?.equipped ? (
          <Button onClick={handleUnequipItem} variant="danger" fullWidth>
            Desequipar
          </Button>
        ) : (
          <Button onClick={handleEquipItem} variant="primary" fullWidth>
            Equipar
          </Button>
        )}
      </div>
    </div>
  );
}
