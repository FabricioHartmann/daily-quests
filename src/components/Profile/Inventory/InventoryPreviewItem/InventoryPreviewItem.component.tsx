import { Button, Text } from "../../../Generic";
import { ITEM_ICONS } from "../../../../store/inventory/inventoryIconsMapper";
import "./InventoryPreviewItem.styles.css";
import { useInventoryStore } from "../../../../store/inventory/inventory.store";
import type {
  CatalogItem,
  InventoryItem,
} from "../../../../store/inventory/inventory.types";

export function InventoryPreviewItem({
  item,
  onToggleEquip,
}: {
  item: CatalogItem & { equipped: boolean };
  onToggleEquip: () => void;
}) {
  const { unequipByType } = useInventoryStore();
  const Icon = ITEM_ICONS[item.icon];
  if (!Icon) {
    return null;
  }

  const handleUnequipItem = (type: InventoryItem["type"]) => {
    unequipByType(type);
  };

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
            {item?.effects?.map((effect) => (
              <Text key={effect} italic>
                • {effect}
              </Text>
            ))}
          </div>
        </div>
        <Text italic>{item.description}</Text>
      </div>
      <div className="inventory-preview-footer">
        {item?.equipped ? (
          <Button
            onClick={onToggleEquip}
            variant="danger"
            fullWidth
          >
            Desequipar
          </Button>
        ) : (
          <Button onClick={onToggleEquip} variant="primary" fullWidth>
            Equipar
          </Button>
        )}
      </div>
    </div>
  );
}
