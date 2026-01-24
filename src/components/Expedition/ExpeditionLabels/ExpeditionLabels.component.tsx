import { Text } from "../../GenericComponents";
import { GiChest, GiStopwatch } from "react-icons/gi";
import "./ExpeditionLabels.styles.css";
import type { ExpeditionLabelsProps } from "./ExpeditionLabels.types";

export function ExpeditionLabels({ minExp, maxExp }: ExpeditionLabelsProps) {
  return (
    <div className="expedition-hud-info">
      <div className="expedition-label">
        <GiStopwatch size={16} color="var(--white)" />
        <Text>25 + 5</Text>
      </div>
      <div className="expedition-label">
        <GiChest size={16} color="var(--white)" />
        <Text>{`${minExp}-${maxExp} XP`}</Text>
      </div>
    </div>
  );
}
