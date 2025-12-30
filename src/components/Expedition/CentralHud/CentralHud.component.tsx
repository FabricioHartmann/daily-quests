import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../Generic";
import { CircularProgress } from "../index";
import "./CentralHUD.styles.css";
import { phaseLabel } from "../../../store/expedition/constants";
import { useExpeditionTimer } from "../../../hooks/useExpeditionTimer/useExpeditionTimer";
import { GiOpenChest } from "react-icons/gi";

export function CentralHUD() {
  const phase = useExpeditionStore((s) => s.phase);
  const { timeLeft, progress } = useExpeditionTimer();

  return (
    <div className="expedition-hud-card">
      <Text>{phaseLabel[phase]} </Text>
      {phase === "finished" ? (
        <GiOpenChest size={80} color="var(--white)" />
      ) : (
        <div className="expedition-circular">
          <CircularProgress phase={phase} value={progress} />
          <div className="expedition-circular-label">
            <Text>{formatTime(timeLeft)}</Text>
          </div>
        </div>
      )}
      <Text size="xs">Expedições concluídas hoje: 0</Text>
    </div>
  );
}
