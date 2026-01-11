import { useExpeditionTimer } from "../../../hooks/useExpeditionTimer/useExpeditionTimer";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";
import type { RitualProps } from "../../../store/rituals/rituals.types";
import { RenderIf, Text } from "../../Generic";
import "./RitualResumeItem.styles.css";

export function RitualResumeItem({ ritual }: RitualProps) {
  const Icon = RITUAL_ICONS[ritual.icon];
  const { phase } = useExpeditionStore();
  const { progress } = useExpeditionTimer();

  const isMobile = useIsMobile();
  const isMobileXs = useIsMobile(348);

  return (
    <div
      className={`ritual-resume-item${phase === "finished" ? " finished" : ""}`}
    >
      <div className="ritual-progress-bar">
        <div
          className={`ritual-progress-fill${
            phase === "finished" ? " finished" : ""
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="ritual-resume-content">
        <div className="ritual-resume-icon">
          <Icon size={isMobile ? 14 : 18} color="white" />
        </div>

        <RenderIf condition={!isMobileXs}>
          <Text size={isMobile ? "sm" : "md"}>{ritual.name}</Text>
        </RenderIf>
      </div>
    </div>
  );
}

{
  /* <div className="expedition-resume-progress">
  <div
    className={`progress-resume-bar${phase === "finished" ? "-finished" : ""}`}
  >
    <div className="progress-resume-fill" style={{ width: `${progress}%` }} />
  </div>
</div>; */
}
