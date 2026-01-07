import "./RitualCard.styles.css";
import { Text } from "../../../components/Generic";
import type { RitualProps } from "../../../store/rituals/rituals.types";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";

export function RitualCard({ ritual }: RitualProps) {
  const Icon = RITUAL_ICONS[ritual.icon];

  return (
    <div className="ritual-card">
      <div className="ritual-card-icon">
        <Icon size={24} color="white"/>
      </div>
      <div className="ritual-card-content">
        <div className="ritual-card-header">
          <Text>{ritual.name}</Text>
        </div>

        <div className="ritual-card-info">
          <Text size="sm">{ritual.description}</Text>
        </div>

        <div className="ritual-card-meta">
          <Text italic size="sm">
            cooldown: {ritual.cooldownMinutes}m
          </Text>
          <Text size="sm">+{ritual.xp} XP</Text>
        </div>
      </div>
    </div>
  );
}
