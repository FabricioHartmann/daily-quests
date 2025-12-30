import { Text } from "../../components/Generic";
import { ExpeditionCard } from "../../components/Expedition/ExpeditionCard/ExpeditionCard.component";
import "./Expedition.styles.css";

export function Expedition() {
  return (
    <div className="expedition-page">
      <Text size="lg">Expedição</Text>
      <ExpeditionCard />
    </div>
  );
}
