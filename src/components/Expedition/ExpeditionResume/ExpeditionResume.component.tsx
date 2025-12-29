import { getBackgroundImage } from "../../../pages/Expedition/Expedition.helper";
import {
  PHASE_TOTAL_TIME,
  phaseLabel,
} from "../../../store/expedition/constants";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../Generic";
import "./ExpeditionResume.styles.css";

export function ExpeditionResume() {
  const timeLeft = useExpeditionStore((s) => s.timeLeft);
  const phase = useExpeditionStore((s) => s.phase);
  const dayTime = useExpeditionStore((s) => s.dayTime);
  const background = getBackgroundImage(phase, dayTime);

  const totalTime = PHASE_TOTAL_TIME[phase];
  const progress =
    totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;

  return (
    <div className="expedition-resume">
      <div
        className="expedition-resume-bg"
        style={{ backgroundImage: `url(${background})` }}
      />

      <div className="expedition-resume-content">
        <Text color="black" size="xs">
          {phaseLabel[phase]}{" "}
          {phase !== "idle" ? `- ${formatTime(timeLeft)}` : ""}
        </Text>

        <div className="expedition-resume-progress">
          <div className="progress-resume-bar">
            <div className="progress-resume-fill" style={{ width: progress }} />
          </div>
        </div>
      </div>
    </div>
  );
}
