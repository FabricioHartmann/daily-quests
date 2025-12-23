import type { BuffsProps, BuffType } from "./Buffs.types";
import { ITEM_ICONS } from "../../../store/inventory/inventoryIconsMapper";
import "./Buffs.styles.css";
import type { IconType } from "react-icons/lib";

export function Buffs({ allBuffs }: BuffsProps) {
  const icons = allBuffs
    .map((buff) => ITEM_ICONS[buff.icon] as IconType | undefined)
    .filter(Boolean) as IconType[];

  return (
    <div className="buffs-wrapper">
      {icons.map((Icon, index) => (
        <Icon key={index} size={20} color="var(--black)" />
      ))}
    </div>
  );
}
