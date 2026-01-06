import "./RitualCard.styles.css";
import type { Ritual } from "../../../pages/Rituals/Rituals.types";
import { Text } from "../../Generic";

type RitualProps = {
  ritual: Ritual;
};

export function RitualCard({ ritual }: RitualProps) {
  return (
    <button className="ritual-card">
      <div className="ritual-icon"></div>

      <div className="ritual-info">
        <Text>{ritual.name}</Text>
        <Text>{ritual.description}</Text>
      </div>

      <div className="ritual-meta">
        <Text size="sm">{ritual.cooldownMinutes}m</Text>
        <Text size="sm">+{ritual.xp} XP</Text>
      </div>
    </button>
  );
}
