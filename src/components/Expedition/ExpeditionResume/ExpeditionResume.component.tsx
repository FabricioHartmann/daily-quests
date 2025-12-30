import { getBackgroundImage } from "../../../pages/Expedition/getBackgroundImage";
import { phaseLabel } from "../../../store/expedition/constants";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { formatTime } from "../../../utils/formatTime";
import { Text } from "../../Generic";
import "./ExpeditionResume.styles.css";
import { useExpeditionTimer } from "../../../hooks/useExpeditionTimer/useExpeditionTimer";
import { useNavigate } from "react-router-dom";

export function ExpeditionResume() {
  const navigate = useNavigate()
  const phase = useExpeditionStore((s) => s.phase);
  const dayTime = useExpeditionStore((s) => s.dayTime);
  const { timeLeft, progress } = useExpeditionTimer();
  const background = getBackgroundImage(phase, dayTime);

  const getPhaseLabelAndTimer = () => {
    let label = phaseLabel[phase];
    if (phase === "journey" || phase === "campfire")
      return label + " " + formatTime(timeLeft);
    return label;
  };

  const goToExpeditionPage = () => {
    navigate('/expedicao')
  }

  return (
    <div className="expedition-resume" onClick={goToExpeditionPage}>
      <div
        className="expedition-resume-bg"
        style={{ backgroundImage: `url(${background})` }}
      />

      <div className="expedition-resume-content">
        <Text color="#525252" size="xs" weight={600}>
          {getPhaseLabelAndTimer()}
        </Text>

        <div className="expedition-resume-progress">
          <div
            className={`progress-resume-bar${
              phase === "finished" ? "-finished" : ""
            }`}
          >
            <div
              className={`progress-resume-fill-${
                phase === "campfire" ? "rest" : "journey"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
