import { QuestList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import "./Home.styles.css";
import { ExpeditionResume } from "../../components/Expedition";
import { RitualResume } from "../../components/Ritual/RitualResume/RitualResume.component";

export function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <ProfileCard />
        <ExpeditionResume />
      </div>
      <div className="home-ritual-wrapper">
        <RitualResume />
      </div>
      <QuestList />
    </div>
  );
}
