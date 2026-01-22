import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { useRitualTimer } from "../../../hooks/useRitualTimer/useRitualTimer";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { RenderIf, Text } from "../../Generic";
import "./RitualResumeItem.styles.css";
import { formatTime } from "../../../utils/formatTime";
import type { RitualResumeProps } from "./RitualResume.types";

export function RitualResumeItem({ ritual }: RitualResumeProps) {
  const Icon = RITUAL_ICONS[ritual.icon];
  const { timeLeft } = useRitualTimer();
  const phase = useRitualsStore((store) => store.phase);
  const isMobile = useIsMobile();
  const isMobileXs = useIsMobile(310);

  const navigate = useNavigate();

  const goToRitualsPage = () => {
    navigate("/rituais");
  };

  return (
    <div onClick={goToRitualsPage} className={`ritual-resume-item ${phase}`}>
      <div className="ritual-resume-content">
        <div className="ritual-resume-icon">
          <Icon size={16} color="white" />
        </div>
        <RenderIf condition={!isMobileXs}>
          <Text size={isMobile ? "sm" : "md"}>{ritual.name}</Text>
        </RenderIf>
      </div>
      <div className="ritual-resume-timer">
        <RenderIf condition={phase === "finished"}>
          <Text italic size="xs">
            Finalizado
          </Text>
        </RenderIf>
        <RenderIf condition={phase === "idle"}>
          <Text italic size="xs">
            Não iniciado
          </Text>
        </RenderIf>
        <RenderIf condition={phase === "started"}>
          <Text italic size="xs">
            {formatTime(timeLeft)}
          </Text>
        </RenderIf>
      </div>
    </div>
  );
}
