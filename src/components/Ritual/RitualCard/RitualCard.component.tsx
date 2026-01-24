import "./RitualCard.styles.css";
import { RenderIf, Text } from "../../../components/GenericComponents";
import type { RitualProps } from "../../../store/rituals/rituals.types";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";
import { formatTime } from "../../../utils/formatTime";
import { useRitualTimer } from "../../../hooks/useRitualTimer/useRitualTimer";
import { useRitualsStore } from "../../../store/rituals/rituals.store";

export function RitualCard({ ritual }: RitualProps) {
  const Icon = RITUAL_ICONS[ritual.icon];
  const phase = useRitualsStore((s) => s.phase);
  const { timeLeft } = useRitualTimer();

  return (
    <div className={`ritual-card ${ritual.isActive ? "" : "inactive"}`}>
      <div className="ritual-card-icon">
        <Icon size={24} color="white" />
      </div>
      <div className="ritual-card-content">
        <div className="ritual-card-header">
          <Text>{ritual.name}</Text>
          <RenderIf condition={ritual.isActive}>
            <RenderIf condition={phase === "finished"}>
              <Text italic size="sm">Finalizado</Text>
            </RenderIf>
            <RenderIf condition={phase === "idle"}>
              <Text italic size="sm">Não iniciado</Text>
            </RenderIf>
            <RenderIf condition={phase === "started"}>
              <Text italic size="sm">{formatTime(timeLeft)}</Text>
            </RenderIf>
          </RenderIf>
        </div>

        <div>
          <Text size="sm">{ritual.description}</Text>
        </div>
      </div>
    </div>
  );
}
