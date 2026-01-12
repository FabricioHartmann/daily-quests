import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { RitualResumeItem } from "../RitualResumeItem/RitualResumeItem.component";
import "./RitualResume.styles.css";

export function RitualResume() {
  const { rituals } = useRitualsStore();
  return (
    <div className="ritual-resume-wrapper">
      {rituals.map((ritual) => (
        <RitualResumeItem ritual={ritual} />
      ))}
    </div>
  );
}
