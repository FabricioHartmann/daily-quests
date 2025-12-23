import { useMemo } from "react";
import { Modal } from "../..";
import type { ItemId } from "../../../../store/inventory/inventory.types";
import { ITEM_ICONS } from "../../../../store/inventory/inventoryIconsMapper";
import { Flex, Text } from "../../../Generic";
import "./MobileItemPreview.styles.css";
import { useInventoryStore } from "../../../../store/inventory/inventory.store";
import { useModalStore } from "../../../../store/modal/modal.store";
import { ITEMS_CATALOG } from "../../../../data/itemsCatalog";

export function MobileItemPreview({ itemId }: { itemId: ItemId }) {
  const { items, equipItem, unequipByType } = useInventoryStore();
  const { closeModal } = useModalStore();

  const item = useMemo(() => {
    const invItem = items.find((i) => i.itemId === itemId);
    const catalog = ITEMS_CATALOG[itemId];
    if (!catalog || !invItem) return null;
    return { ...catalog, equipped: invItem.equipped };
  }, [itemId, items]);

  if (!item) return null;
  const Icon = ITEM_ICONS[item.icon];

  const handleToggleEquip = () => {
    if (item.equipped) unequipByType(item.type);
    else equipItem(item.itemId);
    closeModal()
  };

  return (
    <Modal
      hasCustomFooter
      primaryButtonLabel={item.equipped ? "Desequipar" : "Equipar"}
      primaryButtonVariant={item.equipped ? "danger" : "primary"}
      primaryButtonAction={handleToggleEquip}
      title={item.name}
    >
      <Flex direction="column" align="start" gap="8px">
        <div className="mobile-preview">
          <div className="mobile-preview-item">
            <Icon color="white" size={56} />
          </div>
          <div className="mobile-item-effects">
            <Text italic>Efeitos:</Text>
            <div className="mobile-item-single-effect">
              {item?.effects?.map((effect) => (
                <Text key={effect} italic>
                  • {effect}
                </Text>
              ))}
            </div>
          </div>
        </div>

        <Text italic>{item?.description}</Text>
      </Flex>
    </Modal>
  );
}
