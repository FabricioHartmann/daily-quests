import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { useRitualTimer } from "../../../hooks/useRitualTimer/useRitualTimer";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { RenderIf, Text } from "../../Generic";
import "./RitualResumeItem.styles.css";
import { formatTime } from "../../../utils/formatTime";
import type { RitualResumeProps } from "./RitualResume.types";

export function RitualResumeItem({ ritual, activeRiualsLength }: RitualResumeProps) {
  const Icon = RITUAL_ICONS[ritual.icon];
  const { progress, timeLeft } = useRitualTimer();
  const phase = useRitualsStore((store) => store.phase);
  const isMobile = useIsMobile();
  const isMobileXs = useIsMobile(348);
  const navigate = useNavigate();

  const goToRitualsPage = () => {
    navigate("/rituais");
  };

  const showRitualName =
   activeRiualsLength === 1 || !isMobileXs;

  return (
    <div
      onClick={goToRitualsPage}
      className="ritual-resume-item"
    >
      <div className="ritual-resume-content">
        <div className="ritual-resume-icon">
          <Icon size={14} color="white" />
        </div>

        <RenderIf condition={showRitualName}>
          <Text size={isMobile ? "sm" : "md"}>{ritual.name}</Text>
        </RenderIf>
      </div>
      <div className="ritual-resume-timer">
        <Text size="xs">{formatTime(timeLeft)}</Text>
      </div>
    </div>
  );
}
