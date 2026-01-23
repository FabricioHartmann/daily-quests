import { QuestList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import { ExpeditionResume } from "../../components/Expedition";
import { RitualResume } from "../../components/Ritual/RitualResume/RitualResume.component";
import { useRitualsStore } from "../../store/rituals/rituals.store";
import { RenderIf } from "../../components/Generic";
import "./Home.styles.css";

export function Home() {
  const rituals = useRitualsStore((s) => s.rituals);
  const filteredRituals = rituals.filter((ritual) => ritual.isActive);

  return (
    <div className="home-page-container">
      <div className="home-header">
        <ProfileCard />
        <ExpeditionResume />
      </div>
      <RenderIf condition={!!filteredRituals.length}>
        <div className="home-ritual-wrapper">
          <RitualResume />
        </div>
      </RenderIf>

      <QuestList />
    </div>
  );
}
