import { RenderIf, Text } from "../../components/Generic";
import { ExpeditionCard } from "../../components/Expedition/ExpeditionCard/ExpeditionCard.component";
import "./Expedition.styles.css";
import { InformationCard as ExpeditionInformationCard } from "../../components/Expedition/InformationCard/InformationCard.component";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";

export function Expedition() {
  const isMobile = useIsMobile();

  return (
    <div className="expedition-page">
      <Text size="lg">Expedição</Text>
      <div className="expedition-wrapper">
        <ExpeditionCard />
        <RenderIf condition={!isMobile}>
          <ExpeditionInformationCard />
        </RenderIf>
      </div>
    </div>
  );
}
