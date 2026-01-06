import { Text } from "../../Generic";
import { RitualTipsContent } from "../RitualTipsContent/RitualTipsContent.component";
import "./RitualTips.styles.css";

export function RitualTips() {
  return (
    <div className="ritual-tips">
      <Text>- Como funciona?</Text>
      <RitualTipsContent />
    </div>
  );
}
