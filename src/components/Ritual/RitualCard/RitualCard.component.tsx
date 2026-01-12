import "./RitualCard.styles.css";
import { Text } from "../../../components/Generic";
import type { RitualProps } from "../../../store/rituals/rituals.types";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";

export function RitualCard({ ritual }: RitualProps) {
  const Icon = RITUAL_ICONS[ritual.icon];

  return (
    <div className="ritual-card">
      <div className="ritual-card-icon">
        <Icon size={24} color="white" />
      </div>
      <div className="ritual-card-content">
        <div className="ritual-card-header">
          <Text>{ritual.name}</Text>
        </div>

        <div>
          <Text size="sm">{ritual.description}</Text>
        </div>
      </div>
    </div>
  );
}
