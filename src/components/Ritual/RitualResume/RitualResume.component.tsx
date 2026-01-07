import { MOCKED_RITUALS } from "../../../store/rituals/constants";
import { RitualResumeItem } from "../RitualResumeItem/RitualResumeItem.component";
import "./RitualResume.styles.css";

export function RitualResume() {
  return (
    <div className="ritual-resume-wrapper">
      {MOCKED_RITUALS.map((ritual) => (
        <RitualResumeItem ritual={ritual} />
      ))}
    </div>
  );
}
