import { rarityIcons } from "./constants";
import type { RarityIconProps } from "./RarityIcon.types";
import "./RarityIcon.styles.css";

export function RarityIcon({ rarity, size = 18 }: RarityIconProps) {
  return (
    <div className="rarity-icon-wrapper">
      <span style={{ fontSize: size, color: 'white' }} title={rarity}>
        {rarityIcons[rarity]}
      </span>
    </div>
  );
}
