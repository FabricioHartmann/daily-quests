import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { RitualResumeItem } from "../RitualResumeItem/RitualResumeItem.component";
import "./RitualResume.styles.css";

export function RitualResume() {
  const rituals = useRitualsStore(s => s.rituals);
  const filteredRituals = rituals.filter((ritual) => ritual.isActive);
  return (
    <div className="ritual-resume-wrapper">
      {filteredRituals.map((ritual) => (
        <RitualResumeItem key={ritual.id} ritual={ritual} />
      ))}
    </div>
  );
}
