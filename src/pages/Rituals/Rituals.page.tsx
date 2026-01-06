import { Text } from "../../components/Generic";
import { RitualCard } from "../../components/Ritual/RitualCard/RitualCard.component";
import { MOCKED_RITUALS } from "../../store/rituals/constants";
import "./Rituals.style.css";

export function Rituals() {
  return (
    <div className="rituals-page">
      <div className="rituals-page-header">
        <Text size="lg">Rituais</Text>
      </div>
      <div className="">
        <div className="ritual-cards-wrapper">
          {MOCKED_RITUALS.map((ritual) => (
            <RitualCard key={ritual.id} ritual={ritual} />
          ))}
        </div>
      </div>
    </div>
  );
}
