import { Text } from "../../Generic";
import { InformationContent } from "../InformationContent/InformationContent.component";
import "./InformationCard.styles.css";

export function InformationCard() {
  return (
    <div className="expedition-information-card">
      <div>
        <Text>- Como funciona?</Text>
      </div>
      <InformationContent />
    </div>
  );
}
