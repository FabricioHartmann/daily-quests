import { useRitualTimer } from "../../../hooks/useRitualTimer/useRitualTimer";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../Generic";
import "./RitualProgress.styles.css";

export function RitualProgress() {
  const phase = useRitualsStore((store) => store.phase);
  const { progress, timeLeft } = useRitualTimer();

  const getPhaseLabelAndTimer = () => {
    if (phase === "idle") return "Não iniciado";
    if (phase === "started") return `Iniciado ${formatTime(timeLeft)}`;
    return "Finalizado";
  };

  return (
    <div className="ritual-actions">
      <Text size="xs">{getPhaseLabelAndTimer()}</Text>
      <div className="ritual-progress">
        <div className={`ritual-bar${phase === "finished" ? "-finished" : ""}`}>
          <div className="ritual-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
