import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../Generic";
import { CircularProgress } from "../index";
import "./CentralHUD.styles.css";
import { phaseLabel } from "../../../store/expedition/constants";
import { useExpeditionTimer } from "../../../hooks/useExpeditionTimer/useExpeditionTimer";

export function CentralHUD() {
  const phase = useExpeditionStore((s) => s.phase);
  const { timeLeft, progress } = useExpeditionTimer();

  return (
    <div className="expedition-hud-card">
      <Text>Fase: {phaseLabel[phase]} </Text>

      <div className="expedition-circular">
        <CircularProgress phase={phase} value={progress} />
        <div className="expedition-circular-label">
          <Text>{formatTime(timeLeft)}</Text>
        </div>
      </div>
      <div className="central-hud-footer">
        <Text size="xs">Expedições concluídas hoje: 0</Text>
      </div>
    </div>
  );
}
