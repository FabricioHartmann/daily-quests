import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { useRitualTimer } from "../../../hooks/useRitualTimer/useRitualTimer";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import type { RitualProps } from "../../../store/rituals/rituals.types";
import { RenderIf, Text } from "../../Generic";
import "./RitualResumeItem.styles.css";

export function RitualResumeItem({ ritual }: RitualProps) {
  const Icon = RITUAL_ICONS[ritual.icon];
  const { progress } = useRitualTimer();
  const phase = useRitualsStore((store) => store.phase);
  const isMobile = useIsMobile();
  const isMobileXs = useIsMobile(348);
  const navigate = useNavigate();

  const goToRitualsPage = () => {
    navigate("/rituais");
  };

  return (
    <div
      onClick={goToRitualsPage}
      className={`ritual-resume-item${phase === "finished" ? " finished" : ""}`}
    >
      <div className="ritual-resume-progress-bar">
        <div
          className={`ritual-resume-progress-fill${
            phase === "finished" ? " finished" : ""
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="ritual-resume-content">
        <div className="ritual-resume-icon">
          <Icon size={16} color="white" />
        </div>

        <RenderIf condition={!isMobileXs}>
          <Text size={isMobile ? "sm" : "md"}>{ritual.name}</Text>
        </RenderIf>
      </div>
    </div>
  );
}
