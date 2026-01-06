import "./RitualCard.styles.css";
import type { Ritual } from "../../../pages/Rituals/Rituals.types";
import { Text } from "../../../components/Generic";

type RitualProps = {
  ritual: Ritual;
};

export function RitualCard({ ritual }: RitualProps) {
  return (
    <button className="ritual-card">
      <div className="ritual-card-header">
        <Text>{ritual.name}</Text>
      </div>

      <div className="ritual-card-info">
        <Text size="sm">{ritual.description}</Text>
      </div>

      <div className="ritual-card-meta">
        <Text italic size="sm">cooldown: {ritual.cooldownMinutes}m</Text>
        <Text size="sm">+{ritual.xp} XP</Text>
      </div>
    </button>
  );
}
