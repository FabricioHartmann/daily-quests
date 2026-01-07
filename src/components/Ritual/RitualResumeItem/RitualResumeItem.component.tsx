import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";
import type { RitualProps } from "../../../store/rituals/rituals.types";
import { RenderIf, Text } from "../../Generic";
import "./RitualResumeItem.styles.css";

export function RitualResumeItem({ ritual }: RitualProps) {
  const Icon = RITUAL_ICONS[ritual.icon];
  const isMobile = useIsMobile();
  const isMobileXs = useIsMobile(348);

  return (
    <div className="ritual-resume-item">
      <div className="ritual-resume-icon">
        <Icon size={isMobile ? 14 : 18} color="white" />
      </div>
      <div>
        <RenderIf condition={!isMobileXs}>
          <div>
            <Text size={isMobile ? "sm" : "md"}>{ritual.name}</Text>
          </div>
        </RenderIf>
      </div>
    </div>
  );
}
