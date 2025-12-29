import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../Generic";
import { CircularProgress } from "../index";
import "./CentralHUD.styles.css";
import {
  PHASE_TOTAL_TIME,
  phaseLabel,
} from "../../../store/expedition/constants";

export function CentralHUD() {
  const timeLeft = useExpeditionStore((s) => s.timeLeft);
  const phase = useExpeditionStore((s) => s.phase);
  const totalTime = PHASE_TOTAL_TIME[phase];
  const progress =
    totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;

  return (
    <div className="expedition-hud-card">
      <Text>Fase: {phaseLabel[phase]} </Text>

      <div className="expedition-circular">
        <CircularProgress value={progress} />
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
