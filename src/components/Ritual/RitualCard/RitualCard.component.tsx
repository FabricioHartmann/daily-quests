import "./RitualCard.styles.css";
import { Text } from "../../../components/Generic";
import type { Ritual } from "../../../store/rituals/rituals.types";

type RitualProps = {
  ritual: Ritual;
};

export function RitualCard({ ritual }: RitualProps) {
  return (
    <div className="ritual-card">
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
    </div>
  );
}
