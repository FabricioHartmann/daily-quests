import { Modal } from "../..";
import { ITEM_ICONS } from "../../../../store/inventory/inventoryIconsMapper";
import { Flex, Text } from "../../../Generic";
import type { InventoryPreviewItemProps } from "../../../Profile/Inventory/Inventory.types";
import "./MobileItemPreview.styles.css";

export function MobileItemPreview({ item }: InventoryPreviewItemProps) {
  const Icon = ITEM_ICONS[item.icon];

  return (
    <Modal hasCustomFooter primaryButtonLabel="Equipar" title={item.name}>
      <Flex direction="column" align="start" gap="8px">
        <div className="mobile-preview">
          <div className="mobile-preview-item">
            <Icon color="white" size={56} />
          </div>
          <div className="mobile-item-effects">
            <Text italic>Efeitos:</Text>
            <div className="mobile-item-single-effect">
              {item.effects.map((effect) => (
                <Text italic>• {effect}</Text>
              ))}
            </div>
          </div>
        </div>

        <Text italic>{item.description}</Text>
      </Flex>
    </Modal>
  );
}
