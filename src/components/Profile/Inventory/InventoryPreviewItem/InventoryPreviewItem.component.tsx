import { Button, Text } from "../../../GenericComponents";
import { ITEM_ICONS } from "../../../../store/inventory/inventoryIconsMapper";
import "./InventoryPreviewItem.styles.css";
import type { CatalogItem } from "../../../../store/inventory/inventory.types";

export function InventoryPreviewItem({
  item,
  onToggleEquip,
}: {
  item: CatalogItem & { equipped: boolean };
  onToggleEquip: () => void;
}) {
  const Icon = ITEM_ICONS[item.icon];
  if (!Icon) {
    return null;
  }

  return (
    <div className="inventory-preview">
      <div className="inventory-preview-item">
        <div className="preview-item-wrapper">
          <Icon color="white" size={56} />
        </div>
        <Text>{item.name}</Text>
      </div>
      <div className="inventory-preview-description">
        <div>
          <Text>Efeitos:</Text>
          <div>
            {item?.effects?.map((effect, index) => (
              <Text size="sm" key={index}>
                • {effect.description}
              </Text>
            ))}
          </div>
        </div>
        <Text italic size="sm">{item.description}</Text>
      </div>
      <div className="inventory-preview-footer">
        {item?.equipped ? (
          <Button onClick={onToggleEquip} variant="danger" fullWidth>
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
