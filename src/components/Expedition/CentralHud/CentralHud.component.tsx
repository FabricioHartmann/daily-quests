import { useEffect } from "react";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import type { Phase } from "../../../store/expedition/expedition.types";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../Generic";
import { CircularProgress } from "../CircularProgress/CircularProgress.component";
import "./CentralHUD.styles.css";
import {
  CAMPFIRE_TIME,
  JOURNEY_TIME,
} from "../../../store/expedition/constants";

export function CentralHUD() {
  const timeLeft = useExpeditionStore((s) => s.timeLeft);
  const phase = useExpeditionStore((s) => s.phase);
  const phaseLabel: Record<Phase, string> = {
    idle: "Não iniciada",
    journey: "Jornada",
    campfire: "Descanso",
  };

  const PHASE_TOTAL_TIME: Record<Phase, number> = {
    idle: 0,
    journey: JOURNEY_TIME,
    campfire: CAMPFIRE_TIME,
  };

  const totalTime = PHASE_TOTAL_TIME[phase];

  const progress =
    totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;

  return (
    <div className="expedition-hud-card">
      <div>
        <Text>Fase: {phaseLabel[phase]} </Text>
      </div>

      <div className="expedition-circular">
        <CircularProgress value={progress} />
        <div className="expedition-circular-label">
          <Text>{formatTime(timeLeft)}</Text>
        </div>
      </div>
      <div className="central-hud-footer">
        <Text size="sm">Expedições concluídas hoje: 0</Text>
      </div>
    </div>
  );
}
