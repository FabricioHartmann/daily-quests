import { QuestList } from "../../components/Quest";
import { ProfileCard } from "../../components/Profile";
import "./Home.styles.css";
import { ExpeditionResume } from "../../components/Expedition";

export function Home() {

  return (
    <div className="home-page-container">
      <div className="header">
        <ProfileCard/>
        <ExpeditionResume />
      </div>
      <QuestList />
    </div>
  );
}
