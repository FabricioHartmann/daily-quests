import { MOCKED_RITUALS } from "../../../store/rituals/constants";
import { Text } from "../../Generic";
import "./RitualsResume.styles.css";

export function RitualResume() {
  return (
    <div>
      <div className="ritual-cards-wrapper">
        {MOCKED_RITUALS.map((ritual) => (
          <div key={ritual.id}>
            <Text>{ritual.name}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
