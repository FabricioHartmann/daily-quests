import { phaseLabel } from "../../../store/expedition/constants";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../GenericComponents";
import "./ExpeditionResume.styles.css";
import { useExpeditionTimer } from "../../../hooks/useExpeditionTimer/useExpeditionTimer";
import { useNavigate } from "react-router-dom";
import { getBackgroundImage } from "../../../utils/expeditionImage";
import { ExpeditionResumeImage } from "../ExpeditionResumeImage";

export function ExpeditionResume() {
  const navigate = useNavigate();
  const phase = useExpeditionStore((s) => s.phase);
  const dayTime = useExpeditionStore((s) => s.dayTime);
  const biome = useExpeditionStore((s) => s.biome);
  const { timeLeft, progress } = useExpeditionTimer();

  const getPhaseLabelAndTimer = () => {
    let label = phaseLabel[phase];
    if (phase === "journey" || phase === "campfire")
      return label + " " + formatTime(timeLeft);
    return label;
  };

  const goToExpeditionPage = () => {
    navigate("/expedicao");
  };

  return (
    <div className="expedition-resume" onClick={goToExpeditionPage}>
      <ExpeditionResumeImage phase={phase} dayTime={dayTime} biome={biome} />

      <div className="expedition-resume-content">
        <Text color="#6d6d6d" size="xs" weight={600}>
          Expedição: {getPhaseLabelAndTimer()}
        </Text>

        <div className="expedition-resume-progress">
          <div
            className={`progress-resume-bar${
              phase === "finished" ? "-finished" : ""
            }`}
          >
            <div
              className="progress-resume-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
