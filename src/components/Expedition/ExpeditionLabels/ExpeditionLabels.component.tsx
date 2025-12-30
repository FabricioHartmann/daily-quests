import { LuClock5 } from "react-icons/lu";
import { Text } from "../../Generic";
import { GiChest } from "react-icons/gi";
import "./ExpeditionLabels.styles.css";
import type { ExpeditionLabelsProps } from "./ExpeditionLabels.types";

export function ExpeditionLabels({ minExp, maxExp }: ExpeditionLabelsProps) {
  return (
    <div className="expedition-hud-info">
      <div className="expedition-label">
        <LuClock5 size={14} color="var(--white)" />
        <Text>25 + 5</Text>
      </div>
      <div className="expedition-label">
        <GiChest size={16} color="var(--white)" />
        <Text>{`${minExp}-${maxExp} XP`}</Text>
      </div>
    </div>
  );
}
