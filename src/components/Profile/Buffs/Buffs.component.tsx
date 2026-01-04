import { ITEM_ICONS } from "../../../store/inventory/inventoryIconsMapper";
import "./Buffs.styles.css";
import type { IconType } from "react-icons/lib";
import { useInventoryStore } from "../../../store/inventory/inventory.store";

export function Buffs() {
  const items = useInventoryStore((store) => store.items);

  const icons = items
    .filter(item => item.equipped)
    .map(item => ITEM_ICONS[item.icon] as IconType | undefined)
    .filter(Boolean) as IconType[];

  return (
    <div className="buffs-wrapper">
      {icons.map((Icon, index) => (
        <Icon key={index} size={20} color="var(--black)" />
      ))}
    </div>
  );
}
